import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Zap, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { icon: Zap, label: "5-minute integration" },
  { icon: Shield, label: "Secure by default" },
  { icon: Clock, label: "100% uptime" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 glow-bg pointer-events-none" />
      
      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
          <span className="text-sm text-muted-foreground">Built for IIIT-H Students</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="gradient-text">Auth</span> for Student Projects
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          A lightweight, secure authentication service for IIIT-H community apps.
          Skip the CAS approval queue—start building and shipping today.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link to="/signup">
            <Button variant="hero" size="lg">
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="heroOutline" size="lg">
              <BookOpen className="w-4 h-4" />
              Sign In
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-2 text-muted-foreground">
              <stat.icon className="w-4 h-4 text-primary" />
              <span className="text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
