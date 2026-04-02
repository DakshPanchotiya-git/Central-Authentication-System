const steps = [
  {
    number: "01",
    title: "Create Your App",
    description: "Register your project in the dashboard and get your OAuth credentials instantly.",
  },
  {
    number: "02",
    title: "Add the SDK",
    description: "Install our lightweight SDK and add a few lines of code to your app.",
  },
  {
    number: "03",
    title: "Users Authenticate",
    description: "Students log in with their IIIT-H email. We verify and return user info to your app.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
          <p className="text-muted-foreground text-lg">
            From zero to authenticated in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <span className="step-number">{step.number}</span>
              <h3 className="text-xl font-semibold mb-3 -mt-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
