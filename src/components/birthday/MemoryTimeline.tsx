import React from "react";
import { Calendar, MessageCircle, Sparkles, Moon } from "lucide-react";

const items = [
  {
    icon: <Calendar className="h-5 w-5" aria-hidden />,
    title: "The day we met",
    caption: "Instagram and common gcs bought us together.",
  },
  {
    icon: <MessageCircle className="h-5 w-5" aria-hidden />,
    title: "That random 2 AM talk",
    caption: "Somehow everything made sense after we called each other the first times.",
  },
  {
    icon: <Sparkles className="h-5 w-5" aria-hidden />,
    title: "We met in school, and got closer.",
    caption: "Random chats, random calls, random everything and jealous people.",
  },
  {
    icon: <Moon className="h-5 w-5" aria-hidden />,
    title: "Quiet moments",
    caption: "Our no contact phases, the distance for our good.",
  },
];

const MemoryTimeline: React.FC = () => {
  return (
    <section aria-labelledby="memories-title" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="memories-title" className="font-display text-3xl sm:text-4xl text-center text-foreground">
          Memory Lane
        </h2>
        <p className="mt-2 text-center text-foreground/70">Little chapters worth revisiting.</p>

        <div
          role="region"
          aria-label="Memory lane"
          className="mt-8 overflow-x-auto pb-4"
        >
          <ol className="flex snap-x gap-6">
            {items.map((m, i) => (
              <li
                key={i}
                className="min-w-[260px] snap-start rounded-xl border bg-card/80 p-5 shadow-sm backdrop-blur transition-colors hover:bg-card"
              >
                <div className="flex items-center gap-2 text-gold">
                  {m.icon}
                  <span className="font-medium text-foreground">{m.title}</span>
                </div>
                <p className="mt-2 text-sm text-foreground/70">{m.caption}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default MemoryTimeline;
