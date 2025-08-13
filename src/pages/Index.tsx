import React from "react";
import Hero from "@/components/birthday/Hero";
import PhotoCollage from "@/components/birthday/PhotoCollage";
import MessageSection from "@/components/birthday/MessageSection";
import MemoryTimeline from "@/components/birthday/MemoryTimeline";
import SurpriseGift from "@/components/birthday/SurpriseGift";
import SiteFooter from "@/components/birthday/SiteFooter";
import BackgroundAudio from "@/components/birthday/BackgroundAudio";

const Index: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Happy Birthday, Somya',
    description: 'A magical, cozy birthday page for Somya with photos, memories, and a sweet surprise.',
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <BackgroundAudio />
      <main>
        <PhotoCollage />
        <MessageSection />
        <MemoryTimeline />
        <SurpriseGift />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
