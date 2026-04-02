import { Zap, Shield, Clock, Code, Rocket, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Quick Integration",
    description: "Add authentication to your project in minutes with our simple SDK and comprehensive docs.",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Industry-standard OAuth 2.0 flows with JWT tokens. Your users' data stays protected.",
  },
  {
    icon: Clock,
    title: "IIIT-H Verified",
    description: "Only verified IIIT-H students can authenticate. Perfect for internal tools and community apps.",
  },
  {
    icon: Code,
    title: "Developer First",
    description: "Clean APIs, detailed logs, and SDKs for popular frameworks. Built by developers, for developers.",
  },
  {
    icon: Rocket,
    title: "No CAS Required",
    description: "Skip the lengthy approval process. Get OAuth credentials instantly for your projects.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Web apps, mobile apps, Discord bots, CLI tools—if it needs auth, we've got you covered.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to ship fast
          </h2>
          <p className="text-muted-foreground text-lg">
            Focus on building your app. We handle the auth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
