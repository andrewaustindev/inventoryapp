import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClockIcon } from "@heroicons/react/24/outline";
import config from "@/config";

export default function Problem() {
  const { problem } = config.landingPage;
  
  const totalHours = problem.problems
    .filter(p => typeof p.hours === 'number')
    .reduce((acc, curr) => acc + (curr.hours as number), 0);

  return (
    <section id="problem" className="py-12 bg-secondary/95">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <Badge 
            className="mb-4" 
            variant="secondary" 
            style={{ 
              backgroundColor: problem.badgeColor, 
              color: problem.badgeTextColor 
            }}
          >
            {problem.badge}
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
            {problem.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {problem.description}
          </p>
        </div>

        <Card className="border-2 border-border bg-card/50">
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {problem.problems.map((problem, index) => (
                <div key={index} className="flex items-center gap-2 text-base">
                  <ClockIcon 
                    className="w-4 h-4 flex-shrink-0" 
                    style={{ color: config.theme.colors[problem.color as keyof typeof config.theme.colors] }} 
                  />
                  <span 
                    className="font-medium" 
                    style={{ color: config.theme.colors[problem.color as keyof typeof config.theme.colors] }}
                  >
                    {problem.hours} hrs
                  </span>
                  <span className="text-muted-foreground">{problem.task}</span>
                </div>
              ))}
            </div>
            <div className="pt-3 mt-3 border-t border-border text-center">
              <span 
                className="font-semibold text-3xl" 
                style={{ color: config.theme.colors[problem.totalHoursColor as keyof typeof config.theme.colors] }}
              >
                {totalHours}+ hours
              </span>
              <span className="text-muted-foreground ml-2">of headaches</span>
            </div>
          </CardContent>
        </Card>
        <div className="text-center mt-8">
          <p className="text-lg text-muted-foreground mb-2">Discover a simpler solution</p>
          <svg 
            className="w-6 h-6 mx-auto animate-bounce text-muted-foreground" 
            fill="none" 
            strokeWidth={2} 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}