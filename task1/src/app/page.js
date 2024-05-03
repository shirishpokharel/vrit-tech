import AboutUs from "@/components/about";
import Contact from "@/components/contactUs";
import Faqs from "@/components/faq";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import Products from "@/components/product";
import ScrollUp from "@/components/scrollUp";

export default function Home() {
  return (
    <>
      <main className="main">
        <HeroSection />
        <AboutUs />
        <Products />
        <Faqs />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}
