import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import BikeGrid from "@/components/BikeGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import AdventureSection from "@/components/AdventureSection";
import RentalProcess from "@/components/RentalProcess";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <BikeGrid />
      <AdventureSection />
      <RentalProcess />
      <ContactSection />
      <Footer />
    </main>
  );
}
