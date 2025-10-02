"use client";

import { FC, ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface ComponentProps {
  title: string;
  description: string[];
  icon?: ReactNode;
  accentColor?: string;
  secondaryColor?: string;
}

const Component: FC<ComponentProps> = ({ 
  title, 
  description, 
  icon,
  accentColor = "#10b981",
  secondaryColor = "#3b82f6"
}) => {
  return (
    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
      <Card 
        className="text-white rounded-2xl border shadow-2xl relative backdrop-blur-xl overflow-hidden hover:shadow-3xl w-[350px]"
        style={{
          borderColor: `${accentColor}20`,
          background: `linear-gradient(135deg, #010101 0%, #090909 50%, #010101 100%)`,
        }}
      >
        
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500"
            style={{
              background: `linear-gradient(to top right, ${accentColor}15, ${secondaryColor}10)`
            }}
          ></div>
          <div 
            className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce"
            style={{
              background: `linear-gradient(to top right, ${accentColor}30, transparent)`
            }}
          ></div>
          <div 
            className="absolute top-10 left-10 w-16 h-16 rounded-full blur-xl animate-ping"
            style={{ backgroundColor: `${secondaryColor}20` }}
          ></div>
          <div 
            className="absolute bottom-16 right-16 w-12 h-12 rounded-full blur-lg animate-ping"
            style={{ backgroundColor: `${accentColor}20` }}
          ></div>
          <div 
            className="absolute inset-0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"
            style={{
              background: `linear-gradient(to right, transparent, ${accentColor}10, transparent)`
            }}
          ></div>
        </div>

    
        <div className="p-8 relative z-10 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div 
              className="absolute inset-0 rounded-full border-2 animate-ping"
              style={{ borderColor: `${accentColor}40` }}
            ></div>
            <div 
              className="absolute inset-0 rounded-full border animate-pulse"
              style={{ borderColor: `${secondaryColor}30` }}
            ></div>

            <div 
              className="p-6 rounded-full backdrop-blur-lg border shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
              style={{
                borderColor: `${accentColor}40`,
                background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6))',
                boxShadow: `0 0 30px ${accentColor}20`
              }}
            >
              <div className="transform group-hover:rotate-180 transition-transform duration-700">
                {icon}
              </div>
            </div>
          </div>

          <h3 
            className="mb-4 text-3xl font-bold bg-clip-text text-transparent animate-pulse transform group-hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage: `linear-gradient(to right, ${accentColor}, ${secondaryColor}, ${accentColor})`
            }}
          >
            {title}
          </h3>

          <div className="space-y-1 max-w-sm">
            {description.map((line, idx) => (
              <p
                key={idx}
                className="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300"
              >
                {line}
              </p>
            ))}
          </div>

          <div 
            className="mt-6 w-1/3 h-0.5 rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse"
            style={{
              background: `linear-gradient(to right, transparent, ${accentColor}, ${secondaryColor}, transparent)`
            }}
          ></div>

          <div className="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            <div 
              className="w-2 h-2 rounded-full animate-bounce"
              style={{ backgroundColor: accentColor }}
            ></div>
            <div 
              className="w-2 h-2 rounded-full animate-bounce"
              style={{ backgroundColor: secondaryColor, animationDelay: "0.1s" }}
            ></div>
            <div 
              className="w-2 h-2 rounded-full animate-bounce"
              style={{ backgroundColor: accentColor, animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>

      
        <div 
          className="absolute top-0 left-0 w-20 h-20 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(135deg, ${accentColor}20, transparent)` }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(315deg, ${secondaryColor}20, transparent)` }}
        ></div>
      </Card>
    </div>
  );
};

export default Component;
