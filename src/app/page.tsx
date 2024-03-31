// import { Main } from "next/document";

import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import UpcomingWebinars from "../../Source Code/Music-school-hindi-main/Music-school-hindi-main/src/components/UpcomingWebinars";
import PersonsInTheTeam from "@/components/PersonsInTheTeam";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <h1 className="text-2xl text-center">
          <HeroSection />
          <FeaturedCourses />
          <WhyChooseUs />
          <TestimonialCards />
          <UpcomingWebinars></UpcomingWebinars>
          <PersonsInTheTeam></PersonsInTheTeam>
          <Footer />
        </h1>
      </main>
    </>
  );
}
