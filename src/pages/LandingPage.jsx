import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LiveRates from "../components/LiveRates";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ContactPage from "../components/ContactPage";

export default function LandingPage() {
  return (
    <div className="bg-[#0B0F1A] text-white min-h-screen">
      <Navbar />
      <Hero />
      <LiveRates />
      <Features />
      <Testimonials />
      <ContactPage />
      <Footer />
    </div>
  );
}
