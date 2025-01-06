import Hero from "../components/Hero";
import Features from "../components/Features";
import Statistics from "../components/Statistics";
import About from "../components/About";
import Footer from "../components/Footer";
import BusinessCommunication from "../components/BusinessCommunication";
import CompleteSolution from "../components/CompleteSolution";
import CommunicationStack from "../components/CommunicationStack";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Statistics />
      <BusinessCommunication />
      <CompleteSolution />
      <CommunicationStack />
      <Footer />
    </div>
  );
}