import Hero from "../components/Hero";
import Features from "../components/Features";
import Statistics from "../components/Statistics";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Statistics />
      <About />
      <Footer />
    </div>
  );
}