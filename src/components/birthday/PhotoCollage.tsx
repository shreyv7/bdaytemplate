import React from "react";
import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.jpeg";
import img5 from "@/assets/5.jpeg";
import img6 from "@/assets/6.jpeg";

const photos = [
  { src: img1, alt: "Candid laughter over coffee", rotate: "rotate-[-3deg]" },
  { src: img2, alt: "Cupcake with sparkler", rotate: "rotate-[2deg]" },
  { src: img3, alt: "Walk in the park with balloons", rotate: "rotate-[-1deg]" },
  { src: img4, alt: "Late-night cozy chat", rotate: "rotate-[3deg]" },
  { src: img5, alt: "Confetti laughter moment", rotate: "rotate-[-2deg]" },
  { src: img6, alt: "Handwritten note with heart", rotate: "rotate-[1deg]" },
];

const PhotoCollage: React.FC = () => {
  return (
    <section id="photos" aria-labelledby="photos-title" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="photos-title" className="font-display text-3xl sm:text-4xl text-foreground text-center">
          You slay with your smile
        </h2>
        <p className="mt-2 text-center text-foreground/70">A few snapshots to warm the heart.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {photos.map((p, i) => (
            <figure
              key={i}
              className={`polaroid group relative overflow-hidden p-3 ${p.rotate} transition-transform duration-300 hover:scale-[1.02]`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-64 w-full rounded-sm object-cover shadow-inner transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="mt-3 select-none text-center text-sm text-foreground/70">❤️</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoCollage;
