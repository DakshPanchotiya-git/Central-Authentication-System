import { Check } from "lucide-react";

const codeExample = `import { IIITHAuth } from '@iiith/auth-sdk';

const auth = new IIITHAuth({
  clientId: 'your-app-id',
  redirectUri: 'https://yourapp.com/callback'
});

// Redirect to login
auth.login();

// Handle callback
const user = await auth.handleCallback();
console.log(user.email); // student@iiit.ac.in`;

const features = [
  "TypeScript support out of the box",
  "Framework adapters for React, Vue, Express",
  "Automatic token refresh",
  "Comprehensive error handling",
];

const CodeSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple to integrate
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our SDK handles the complexity of OAuth flows, token management, and
              session handling. You get a clean, promise-based API that just works.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="code-block overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-muted-foreground ml-2 font-mono">
                app.ts
              </span>
            </div>
            <pre className="p-4 overflow-x-auto text-sm">
              <code className="text-muted-foreground font-mono">
                {codeExample.split("\n").map((line, i) => (
                  <div key={i} className="flex">
                    <span className="w-8 text-muted-foreground/50 select-none text-right pr-4">
                      {i + 1}
                    </span>
                    <span className="text-foreground/90">{line}</span>
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeSection;
