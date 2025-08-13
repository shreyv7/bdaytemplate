import React from "react";
import { Heart, PartyPopper, Star } from "lucide-react";

const MessageSection: React.FC = () => {
  return (
    <section aria-labelledby="message-title" className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="relative card-elevated rounded-2xl border p-8 sm:p-10">
          <div className="pointer-events-none absolute -top-3 left-8 flex gap-2 text-gold">
            <Star className="h-4 w-4 animate-sparkle" />
            <PartyPopper className="h-4 w-4 animate-sparkle [animation-delay:0.6s]" />
            <Heart className="h-4 w-4 animate-sparkle [animation-delay:1.2s]" />
          </div>
          <h2 id="message-title" className="font-display text-3xl text-foreground">
            A Little Note
          </h2>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            Hey Somya aka Sana, happy, happy birthday! Here’s to the kindness you carry, the laughter you
            spark, and the calm you leave behind. Our friendship is a quiet kind of magic, and I’m
            forever grateful for it. May this year bring soft mornings, golden evenings, and every
            little thing that makes your heart feel full. You deserve all the gentle joy in the
            world. I’m always cheering for you, whether we are together or not, you will always be my morning thought and night dream. 💜
          </p>
          <p className="mt-4 text-foreground/70">
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
