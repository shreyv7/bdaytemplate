import { ChevronDown, Sparkles } from "lucide-react";
import React from "react";

const FloatingBalloons: React.FC = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="absolute left-[10%] top-[20%] h-6 w-6 rounded-full bg-lavender/60 blur-[1px] animate-float" />
      <span className="absolute left-[75%] top-[30%] h-4 w-4 rounded-full bg-blush/70 blur-[1px] animate-float [animation-delay:0.6s]" />
      <span className="absolute left-[40%] top-[15%] h-8 w-8 rounded-full bg-cream/70 blur-[1px] animate-float [animation-delay:1.2s]" />
      <span className="absolute left-[20%] top-[65%] h-5 w-5 rounded-full bg-gold/60 blur-[1px] animate-float [animation-delay:0.2s]" />
      <span className="absolute left-[60%] top-[70%] h-7 w-7 rounded-full bg-lavender/60 blur-[1px] animate-float [animation-delay:1.6s]" />
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <header className="relative min-h-[100svh] bg-hero">
      <FloatingBalloons />
      <div className="relative z-10 mx-auto flex h-[100svh] max-w-5xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-cream/60 px-4 py-2 text-sm text-foreground/70 shadow-sm backdrop-blur">
          <Sparkles className="h-4 w-4 text-gold" aria-hidden />
          <span>Magical birthday surprise</span>
        </div>
        <h1 className="font-handwriting text-5xl sm:text-6xl md:text-7xl text-foreground drop-shadow-sm animate-fade-in">
          Happy Birthday, Somya 💜
        </h1>
        <p className="mt-6 max-w-2xl font-display text-lg text-foreground/80 animate-fade-in [animation-delay:120ms]">
          To my platonic soulmate, here’s a little corner of the internet just for you.
        </p>

        <a
          href="#photos"
          className="group absolute bottom-10 inline-flex flex-col items-center text-foreground/70 focus:outline-none"
          aria-label="Scroll down"
        >
          <span className="mb-2 text-sm">Scroll</span>
          <span className="rounded-full border border-gold/60 p-2 animate-pulse-glow">
            <ChevronDown className="h-6 w-6" />
          </span>
        </a>

        {/* Removed background music player */}
      </div>
    </header>
  );
};

export default Hero;
