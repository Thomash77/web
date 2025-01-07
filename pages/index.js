import Hero from "../components/Hero";
import Features from "../components/Features";
import Statistics from "../components/Statistics";
import BusinessCommunication from "../components/BusinessCommunication";
import CompleteSolution from "../components/CompleteSolution";
import CommunicationStack from "../components/CommunicationStack";
import OurTechnologies from "../components/OurTechnologies";
import BusinessModel from "../components/BusinessModel";
import Industries from "../components/Industries";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Statistics />
      <BusinessCommunication />
      <CompleteSolution />
      <CommunicationStack />
      <OurTechnologies />
      <BusinessModel />
      <Industries />
      <Footer />
    </div>
  );
}