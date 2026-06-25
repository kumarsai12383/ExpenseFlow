import Hero from "../components/landingcomponents/Hero";
import Stats from "../components/landingcomponents/Stats";
import Features from "../components/landingcomponents/features";
import Benefits from "../components/landingcomponents/Benefits";
import HowItWorks from "../components/landingcomponents/HowItworks";
import NavBar from "../components/landingcomponents/NavBar";
import Testimonials from "../components/landingcomponents/Testimonals";
import FAQs from "../components/landingcomponents/FAQs";
import CTABanner from "../components/landingcomponents/CTA";
import Dashboard from "../components/landingcomponents/dashboard";
import Footer from "../components/landingcomponents/footer";
import { GetUser } from "../supaApi/auth";
import { useState, useEffect } from "react";
import {Navigate} from "react-router-dom";
function LandingPage() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await GetUser();
      setUser(user);
    };
    fetchUser();
  }, []);
  useEffect(() => {
    if (user) {
      console.log("User is logged in.");
    } else {
      console.log("No user is logged in.");
    }
  }, [user]);
  if (user) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="bg-[#0F172A] w-full ">
      <NavBar />
      <div className="bg-[#0F172A]  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Stats />
        <Features />
        <Dashboard />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <FAQs />
        <CTABanner />
        <Footer />
      </div>
    </div>
  );
}
export default LandingPage;
