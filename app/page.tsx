import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Discounts from "@/components/Discounts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Process />
        <Testimonials />
        <Discounts />
      </main>
      <Footer />
    </div>
  );
}
