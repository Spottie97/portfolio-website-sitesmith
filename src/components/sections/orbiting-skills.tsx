"use client";

import { useState, useEffect, useRef } from "react";
import { Code, Database, Zap, Terminal, BarChart3, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";

interface Skill {
  id: number;
  name: string;
  category: string;
  icon: React.ElementType;
  proficiency: number;
  description: string;
}

interface OrbitingSkillsProps {
  skills?: Skill[];
}

export function OrbitingSkills({
  skills = [
    {
      id: 1,
      name: "React.js",
      category: "Frontend",
      icon: Code,
      proficiency: 95,
      description: "Building modern, interactive user interfaces with React and Next.js",
    },
    {
      id: 2,
      name: "TypeScript",
      category: "Language",
      icon: Terminal,
      proficiency: 90,
      description: "Type-safe development with advanced TypeScript patterns",
    },
    {
      id: 3,
      name: "C# Development",
      category: "Backend",
      icon: Database,
      proficiency: 88,
      description: "Enterprise-level backend development with C# and .NET",
    },
    {
      id: 4,
      name: "Python",
      category: "Data Science",
      icon: BarChart3,
      proficiency: 85,
      description: "Data analysis, automation, and machine learning with Python",
    },
    {
      id: 5,
      name: "PostgreSQL",
      category: "Database",
      icon: Database,
      proficiency: 87,
      description: "Relational database design and optimization",
    },
    {
      id: 6,
      name: "IoT Integration",
      category: "Hardware",
      icon: Settings,
      proficiency: 82,
      description: "IoT sensor integration and data collection systems",
    },
    {
      id: 7,
      name: "Data Analytics",
      category: "Analytics",
      icon: BarChart3,
      proficiency: 90,
      description: "Data visualization and business intelligence solutions",
    },
    {
      id: 8,
      name: "Cloud & DevOps",
      category: "Infrastructure",
      icon: Zap,
      proficiency: 85,
      description: "Cloud deployment, CI/CD pipelines, and infrastructure management",
    },
  ],
}: OrbitingSkillsProps) {
  const [expandedSkill, setExpandedSkill] = useState<number | null>(null);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedSkill(null);
      setAutoRotate(true);
    }
  };

  const toggleSkill = (id: number) => {
    if (expandedSkill === id) {
      setExpandedSkill(null);
      setAutoRotate(true);
    } else {
      setExpandedSkill(id);
      setAutoRotate(false);
      const skillIndex = skills.findIndex((skill) => skill.id === id);
      const totalSkills = skills.length;
      const targetAngle = (skillIndex / totalSkills) * 360;
      setRotationAngle(270 - targetAngle);
    }
  };

  useEffect(() => {
    let rotationTimer: ReturnType<typeof setInterval>;

    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.2) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 220;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.5, Math.min(1, 0.5 + 0.5 * ((1 + Math.sin(radian)) / 2)));
    const scale = Math.max(0.8, Math.min(1, 0.8 + 0.2 * ((1 + Math.sin(radian)) / 2)));

    return { x, y, angle, zIndex, opacity, scale };
  };

  const getProficiencyColor = (proficiency: number): string => {
    if (proficiency >= 90) return "from-emerald-500 to-teal-500";
    if (proficiency >= 80) return "from-blue-500 to-cyan-500";
    if (proficiency >= 70) return "from-purple-500 to-pink-500";
    return "from-orange-500 to-yellow-500";
  };

  return (
    <div
      className="w-full min-h-[600px] flex flex-col items-center justify-center overflow-hidden py-20"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="text-center mb-16 z-10">
        <h2 className="text-3xl font-bold mb-4">Core Skills</h2>
        <p className="text-muted-foreground text-lg">Explore my technical expertise</p>
      </div>

      <div className="relative w-full max-w-5xl h-[600px] flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
          }}
        >
          {/* Central Hub */}
          <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60 animate-pulse flex items-center justify-center z-10 shadow-2xl shadow-primary/50">
            <div className="absolute w-28 h-28 rounded-full border-2 border-primary/20 animate-ping opacity-70"></div>
            <div
              className="absolute w-32 h-32 rounded-full border border-primary/10 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-16 h-16 rounded-full bg-background backdrop-blur-md flex items-center justify-center">
              <Zap className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Orbit Rings */}
          <div className="absolute w-[440px] h-[440px] rounded-full border border-border/20"></div>
          <div className="absolute w-[480px] h-[480px] rounded-full border border-border/20"></div>

          {/* Skill Nodes */}
          {skills.map((skill, index) => {
            const position = calculateNodePosition(index, skills.length);
            const isExpanded = expandedSkill === skill.id;
            const isHovered = hoveredSkill === skill.id;
            const Icon = skill.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px) scale(${isExpanded ? 1 : position.scale})`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={skill.id}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSkill(skill.id);
                }}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute rounded-full -inset-2 transition-all duration-300 ${
                    isExpanded || isHovered ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(147, 51, 234, 0) 70%)`,
                    width: "80px",
                    height: "80px",
                    left: "-20px",
                    top: "-20px",
                  }}
                ></div>

                {/* Skill Icon */}
                <div
                  className={`
                  w-14 h-14 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-background text-primary shadow-2xl shadow-primary/50"
                      : "bg-card text-foreground"
                  }
                  border-2 
                  ${isExpanded ? "border-primary" : "border-border"}
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-125" : isHovered ? "scale-110" : ""}
                  hover:border-primary
                `}
                >
                  <Icon size={24} />
                </div>

                {/* Skill Name */}
                <div
                  className={`
                  absolute top-16 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-sm font-semibold tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "text-foreground scale-110" : "text-muted-foreground"}
                  ${isHovered ? "text-foreground" : ""}
                `}
                >
                  {skill.name}
                </div>

                {/* Expanded Card */}
                {isExpanded && (
                  <div className="absolute top-24 left-1/2 -translate-x-1/2 w-72">
                    <SpotlightCard glowColor="accent">
                      <Card className="bg-card/95 backdrop-blur-xl border-0 shadow-2xl shadow-primary/20 overflow-visible">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-gradient-to-b from-primary to-transparent"></div>
                        <CardHeader className="pb-3">
                      <div className="flex justify-between items-center mb-2">
                        <Badge className="px-3 py-1 text-xs bg-primary/20 text-primary border-primary/30">
                          {skill.category}
                        </Badge>
                        <span className="text-xs font-mono text-muted-foreground">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <CardTitle className="text-lg">
                        {skill.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      <p className="mb-4">{skill.description}</p>

                      {/* Proficiency Bar */}
                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="flex justify-between items-center text-xs mb-2">
                          <span className="flex items-center text-muted-foreground">
                            <Zap size={12} className="mr-1" />
                            Proficiency Level
                          </span>
                          <span className="font-mono text-foreground">
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${getProficiencyColor(
                              skill.proficiency
                            )} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                      </Card>
                    </SpotlightCard>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center mt-16 z-10">
        <p className="text-muted-foreground text-sm">Click on any skill to learn more</p>
      </div>
    </div>
  );
}
