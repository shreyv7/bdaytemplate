import React from "react";

const SiteFooter: React.FC = () => {
  return (
    <footer className="mt-10 border-t bg-background/80">
      <div className="mx-auto max-w-5xl px-6 py-10 text-center">
        <blockquote className="font-display text-2xl text-foreground">
          “A platonic soulmate is someone who makes you feel perfectly at ease, just by being there or away. I love you, my Anam-Cara.”
        </blockquote>
        <p className="mt-6 text-sm text-foreground/70">Made with 💜 just for you - iffy</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
