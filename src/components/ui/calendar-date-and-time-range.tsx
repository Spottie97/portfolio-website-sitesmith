"use client";

import { Calendar } from "./calendar-rac";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { CalendarIcon, ClockIcon, GlobeIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { useState, useMemo } from "react";
import { CalendarDate, getLocalTimeZone, today, parseDate, type DateValue } from "@internationalized/date";

interface DateTimePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

const SA_TIMEZONE = "Africa/Johannesburg";
const SA_START_TIME = "17:30"; // Your availability starts at 17:30 SAST

export function DateTimePicker({ value, onChange, placeholder = "Select date and time" }: DateTimePickerProps) {
  const [selectedDate, setSelectedDate] = useState<CalendarDate | null>(
    value ? parseDate(value.split("|")[0]) : null
  );
  const [selectedTime, setSelectedTime] = useState(value?.split("|")[1] || "");
  const [open, setOpen] = useState(false);

  const userTimezone = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []);
  const isSouthAfrica = userTimezone === SA_TIMEZONE;

  // Generate available time slots based on 17:30 SAST
  const availableTimeSlots = useMemo(() => {
    const slots: Array<{ value: string; label: string }> = [];
    
    // Create times from 17:30 to 20:00 in 30-minute intervals
    const startHour = 17;
    const startMinute = 30;
    const endHour = 20;
    
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute of [0, 30]) {
        if (hour === startHour && minute < startMinute) continue;
        if (hour === endHour && minute > 0) continue;
        
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        
        // Convert SA time to user's timezone
        const saDateTime = new Date(`2024-01-01T${timeString}:00`);
        const saTimeStr = saDateTime.toLocaleTimeString('en-US', {
          timeZone: SA_TIMEZONE,
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
        
        const userTimeStr = saDateTime.toLocaleTimeString('en-US', {
          timeZone: userTimezone,
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
        
        const label = isSouthAfrica 
          ? `${timeString}` 
          : `${userTimeStr} (${timeString} SAST)`;
        
        slots.push({ value: timeString, label });
      }
    }
    
    return slots;
  }, [userTimezone, isSouthAfrica]);

  const handleDateSelect = (date: DateValue) => {
    const calendarDate = "calendar" in date ? date as CalendarDate : date;
    setSelectedDate(calendarDate);
    updateValue(calendarDate, selectedTime);
  };

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
    if (selectedDate) {
      updateValue(selectedDate, time);
    }
  };

  const updateValue = (date: CalendarDate | null, time: string) => {
    if (date && time) {
      // Format: YYYY-MM-DD|HH:MM|UserTimezone
      const formatted = `${date.toString()}|${time}|${userTimezone}`;
      onChange?.(formatted);
    } else if (date) {
      onChange?.(date.toString());
    }
  };

  const formatDisplay = () => {
    if (!selectedDate) return placeholder;
    
    const dateStr = selectedDate.toDate(getLocalTimeZone()).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
    
    if (!selectedTime) return dateStr;
    
    // Show converted time in user's timezone
    const saDateTime = new Date(`${selectedDate.toString()}T${selectedTime}:00`);
    const userTimeStr = saDateTime.toLocaleTimeString('en-US', {
      timeZone: userTimezone,
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    
    return `${dateStr} at ${userTimeStr}`;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !selectedDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {formatDisplay()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-4 space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
              <GlobeIcon className="h-3 w-3" />
              {isSouthAfrica ? "South Africa Time (SAST)" : `Times shown in your timezone (${userTimezone})`}
            </p>
            <Calendar
              value={selectedDate || undefined}
              onChange={handleDateSelect}
              minValue={today(getLocalTimeZone())}
            />
          </div>
          
          <div className="border-t pt-3 space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <ClockIcon className="h-4 w-4" />
              Available Times {!isSouthAfrica && "(converted to your timezone)"}
            </label>
            <Select value={selectedTime} onValueChange={handleTimeChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                {availableTimeSlots.map((slot) => (
                  <SelectItem key={slot.value} value={slot.value}>
                    {slot.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {!isSouthAfrica && selectedTime && (
              <p className="text-xs text-muted-foreground">
                Available after 5:30 PM South Africa time
              </p>
            )}
          </div>
          
          {selectedDate && selectedTime && (
            <Button
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Confirm
            </Button>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
