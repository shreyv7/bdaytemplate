import React, { useEffect, useRef } from "react";

/**
 * Plays a background audio track across the entire app lifecycle.
 * - Attempts to autoplay on mount
 * - If blocked by the browser, waits for the first user interaction
 * - Audio file should be placed at public/music.mp3
 */
const BackgroundAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const interactionBoundRef = useRef(false);

  useEffect(() => {
    const audio = new Audio("/music.mp3");
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.5;
    audioRef.current = audio;

    const tryPlay = () => {
      // Safari requires calling play in direct result of user gesture
      audio
        .play()
        .then(() => {
          // Playing
        })
        .catch(() => {
          // Autoplay blocked; wait for interaction
          if (!interactionBoundRef.current) {
            interactionBoundRef.current = true;
            const onInteract = () => {
              audio.play().finally(() => {
                window.removeEventListener("pointerdown", onInteract);
                window.removeEventListener("keydown", onInteract);
                window.removeEventListener("touchstart", onInteract);
              });
            };
            window.addEventListener("pointerdown", onInteract, { once: true });
            window.addEventListener("keydown", onInteract, { once: true });
            window.addEventListener("touchstart", onInteract, { once: true });
          }
        });
    };

    tryPlay();

    return () => {
      try {
        audio.pause();
      } catch {
        // ignore
      }
      audioRef.current = null;
    };
  }, []);

  // No UI; purely side-effect component
  return null;
};

export default BackgroundAudio;


