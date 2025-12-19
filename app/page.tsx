import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import BuiltForSection from "@/components/sections/built-for";
import FeaturesSection from "@/components/sections/features";
import HeroSection from "@/components/sections/hero";
import InvestorsSection from "@/components/sections/investors";
import MissionSection from "@/components/sections/mission";
import ProblemSection from "@/components/sections/problem";
import SolutionSection from "@/components/sections/solution";
import NewsletterSection from "@/components/sections/newsletter";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <HeroSection />
      <BuiltForSection />
      <MissionSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <NewsletterSection />
      <InvestorsSection />
      <Footer />
    </React.Fragment>
  );
}