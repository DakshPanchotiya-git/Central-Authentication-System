import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to ship?</h2>
        <p className="text-muted-foreground text-lg mb-8">
          Join dozens of student developers already using IIITH Auth for their
          projects. Free for all IIIT-H students.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg">
            Create Your First App
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="heroOutline" size="lg">
            <BookOpen className="w-4 h-4" />
            Read the Docs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
