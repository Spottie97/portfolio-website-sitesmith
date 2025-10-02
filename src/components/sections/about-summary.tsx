import dayjs from "dayjs";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { OrbitingSkills } from "@/components/sections/orbiting-skills";
import HighlightCard from "@/components/ui/highlight-card";

const softwareStartYear = 2020;
const agricultureStartYear = 2015;
const softwareExperienceYears = dayjs().year() - softwareStartYear;
const agricultureExperienceYears = dayjs().year() - agricultureStartYear;

const timeline = [
  {
    year: "Oct 2024 – Present",
    title: "Head of Operations - Food Fair Pty Ltd",
    description:
      "Lead operations across three factories while overseeing the entire Data Analytics function. Serve as the lead for AgTech implementation and own the company's technology integrations and IT infrastructure. Within a broader family group of businesses, I direct software, networking, AI integration, web development, and analytics standards to ensure scalable, secure, and interoperable systems across the portfolio.",
  },
  {
    year: "Jun 2024 – Sep 2024",
    title: "Full‑stack Engineer (Contract) - MethodData (US)",
    description:
      "Delivered end‑to‑end features in a React/TypeScript front end with a Node.js back end. Work included typed APIs, component libraries, and CI/CD improvements aligned to current TypeScript and React guidance.",
  },
  {
    year: "Feb 2023 – Jun 2024",
    title: "Backend Engineer - Talent Digital Art",
    description:
      "Contributed to backend systems for the studio's first shipped title, Super Dragon Punch Force 3, a cross‑platform 2.5D fighting game launched in open beta on PC and mobile. Responsibilities included API design, auth, matchmaking and live‑ops support in a service-oriented stack. SDPF3 is published by the South African studio Talent Digital Art and is available on Steam and mobile stores, with coverage from gaming press and platforms highlighting the launch and tie‑in to the film Boy Kills World.",
  },
  {
    year: "Jan 2020 – Feb 2023",
    title: "Data Analyst & IT Manager - Food Fair Pty Ltd",
    description:
      "Built and maintained the company's data and IT backbone across manufacturing sites, enabling reporting, analytics, and operational visibility. Introduced process automation and basic BI to improve decision-making and uptime.",
  },
];

export function AboutSummary() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-20">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          Hello, I&apos;m <span className="text-primary">Reinhardt Erasmus</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A software engineer with deep roots in agriculture, building digital tools that solve real farming challenges. Based in South Africa, I combine agricultural knowledge with modern web technology to create platforms that help farmers optimize operations, increase yields, and make data-driven decisions.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          My unique journey from 10 years in agriculture to software engineering means I don&apos;t just build technology—I build solutions that make sense in the field. I understand the seasonal pressures, the resource constraints, and most importantly, the real problems that need solving.
        </p>
      </div>

      {/* Snapshot Card */}
      <div className="max-w-4xl mx-auto">
        <SpotlightCard>
          <Card className="border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Professional Snapshot</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">{softwareExperienceYears}+</div>
                <div className="text-sm text-muted-foreground">Years in Software Engineering</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">{agricultureExperienceYears}+</div>
                <div className="text-sm text-muted-foreground">Years in Agriculture</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Factories Managed</div>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Understanding the real challenges farmers face daily.</strong> Uniquely positioned to build solutions that work in the real world of farming, with deep understanding of both agricultural operations and modern software architecture.
              </p>
              <p>
                Specializing in precision agriculture, IoT integration, data analytics, and platforms that work reliably in field conditions with varying connectivity. <strong>Built for the unique demands of agricultural operations.</strong>
              </p>
            </div>
          </CardContent>
          </Card>
        </SpotlightCard>
      </div>

      {/* Why Choose Me Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">The Agricultural Technology Advantage</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Why farms choose someone who truly understands their operations
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <style>{`
            @keyframes scroll-cards {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .cards-scroll {
              animation: scroll-cards 30s linear infinite;
            }

            .cards-scroll:hover {
              animation-play-state: paused;
            }

            .scroll-container-cards {
              mask: linear-gradient(
                90deg,
                transparent 0%,
                black 10%,
                black 90%,
                transparent 100%
              );
              -webkit-mask: linear-gradient(
                90deg,
                transparent 0%,
                black 10%,
                black 90%,
                transparent 100%
              );
            }
          `}</style>
          
          <div className="scroll-container-cards w-full py-8">
            <div className="cards-scroll flex gap-8 w-max">
              <HighlightCard
                icon={<span className="text-5xl">🌾</span>}
                title="Built by Someone Who Gets It"
                description={[
                  "Real agricultural experience combined with cutting-edge technology means practical, not theoretical solutions.",
                  "I understand why a farmer needs to check irrigation data at 5 AM and how every decision impacts the bottom line."
                ]}
                accentColor="#10b981"
                secondaryColor="#14b885"
              />
              
              <HighlightCard
                icon={<span className="text-5xl">💰</span>}
                title="ROI That Makes Sense"
                description={[
                  "Precision agriculture delivers an average of $90 per acre in savings.",
                  "Every solution is designed with clear, measurable returns that justify the investment and pay for themselves."
                ]}
                accentColor="#059669"
                secondaryColor="#10b981"
              />
              
              <HighlightCard
                icon={<span className="text-5xl">📈</span>}
                title="Scalable Solutions"
                description={[
                  "From family farms to large commercial operations, solutions that grow with your business.",
                  "Start with what you need now, scale as you expand."
                ]}
                accentColor="#10b981"
                secondaryColor="#34d399"
              />
              
              <HighlightCard
                icon={<span className="text-5xl">🌍</span>}
                title="Global Reach, Personal Service"
                description={[
                  "Available for consultations across all time zones.",
                  "Cost-effective development without compromising quality, serving progressive farms worldwide."
                ]}
                accentColor="#059669"
                secondaryColor="#14b885"
              />
              
              {/* Duplicate cards for seamless loop */}
              <HighlightCard
                icon={<span className="text-5xl">🌾</span>}
                title="Built by Someone Who Gets It"
                description={[
                  "Real agricultural experience combined with cutting-edge technology means practical, not theoretical solutions.",
                  "I understand why a farmer needs to check irrigation data at 5 AM and how every decision impacts the bottom line."
                ]}
                accentColor="#10b981"
                secondaryColor="#14b885"
              />
              
              <HighlightCard
                icon={<span className="text-5xl">💰</span>}
                title="ROI That Makes Sense"
                description={[
                  "Precision agriculture delivers an average of $90 per acre in savings.",
                  "Every solution is designed with clear, measurable returns that justify the investment and pay for themselves."
                ]}
                accentColor="#059669"
                secondaryColor="#10b981"
              />
              
              <HighlightCard
                icon={<span className="text-5xl">📈</span>}
                title="Scalable Solutions"
                description={[
                  "From family farms to large commercial operations, solutions that grow with your business.",
                  "Start with what you need now, scale as you expand."
                ]}
                accentColor="#10b981"
                secondaryColor="#34d399"
              />
              
              <HighlightCard
                icon={<span className="text-5xl">🌍</span>}
                title="Global Reach, Personal Service"
                description={[
                  "Available for consultations across all time zones.",
                  "Cost-effective development without compromising quality, serving progressive farms worldwide."
                ]}
                accentColor="#059669"
                secondaryColor="#14b885"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive overview of my core technical skills and proficiency levels
          </p>
        </div>
        <OrbitingSkills />
      </div>

      {/* Timeline Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Career Timeline</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey from data analyst to head of operations
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-8 before:absolute before:left-4 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b from-primary via-primary/50 to-primary/20 md:pl-12">
            {timeline.map((item) => (
              <div key={item.year} className="relative flex gap-6">
                <div className="absolute left-0 top-3 h-4 w-4 -translate-x-[9px] rounded-full border-2 border-primary bg-background shadow-lg" />
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                      {item.year}
                    </span>
                    <h3 className="font-semibold text-lg text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}


