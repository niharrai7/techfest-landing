"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import ParticleField from "@/components/ParticleField";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import EventCategories from "@/components/EventCategories";
import EventRadar from "@/components/EventRadar";
import FeaturedEvent from "@/components/FeaturedEvent";
import CompetitionsSection from "@/components/CompetitionsSection";
import ExperienceKinetic from "@/components/ExperienceKinetic";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#030508] text-white font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* Short Loader (<1.5s) */}
      <LoadingScreen onComplete={() => setLoadingComplete(true)} />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* 2D Canvas Ambient Particle Field */}
      <ParticleField />

      {/* Fixed Header Nav */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Discover Techfest (6 Category Blocks) */}
      <EventCategories />

      {/* Interactive 2D Event Radar */}
      <EventRadar />

      {/* Featured Experience (Robowars) */}
      <FeaturedEvent />

      {/* Competitions Showcase Track */}
      <CompetitionsSection />

      {/* Festival Kinetic Experience */}
      <ExperienceKinetic />

      {/* Final CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
