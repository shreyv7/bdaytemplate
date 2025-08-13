import React, { useCallback, useState } from "react";
import { Gift, Heart } from "lucide-react";
import confetti from "canvas-confetti";

const SurpriseGift: React.FC = () => {
  const [open, setOpen] = useState(false);

  const fireConfetti = useCallback(() => {
    const defaults = { origin: { y: 0.6 } } as const;

    function fire(particleRatio: number, opts: any) {
      confetti({ ...defaults, ...opts, particleCount: Math.floor(200 * particleRatio) });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }, []);

  const onClick = () => {
    if (!open) {
      fireConfetti();
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <section aria-labelledby="surprise-title" className="py-24">
      <div className="mx-auto max-w-xl px-6 text-center">
        <h2 id="surprise-title" className="font-display text-3xl text-foreground">
          A Little Surprise
        </h2>
        <p className="mt-2 text-foreground/70">Tap the gift to reveal a secret wish.</p>

        <button
          onClick={onClick}
          className="mx-auto mt-8 inline-flex h-28 w-28 items-center justify-center rounded-2xl border border-gold/60 bg-cream/80 text-gold shadow-sm backdrop-blur transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-expanded={open}
          aria-controls="secret-wish"
        >
          <Gift className="h-10 w-10" />
        </button>

        <div
          id="secret-wish"
          aria-live="polite"
          className={`mx-auto mt-8 max-w-md transition-all ${open ? "opacity-100" : "opacity-0 translate-y-2 pointer-events-none"}`}
        >
          {open && (
            <div className="card-elevated rounded-2xl border p-6">
              <div className="mb-2 inline-flex items-center gap-2 text-gold">
                <Heart className="h-4 w-4" />
                <span className="text-sm">Secret wish</span>
              </div>
              <p className="text-foreground/80">
                May your year be sprinkled with gentle magic, quiet victories, and laughter that lingers.
                You are so very appreciated today and always. 💜
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SurpriseGift;
