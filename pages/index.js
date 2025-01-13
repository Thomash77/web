import Hero from "../components/Hero";
import OurTechnologies from "../components/OurTechnologies";
import Statistics from "../components/Statistics"; // Moved right after Our Technologies
import Features from "../components/Features";
import BusinessCommunication from "../components/BusinessCommunication";
import CommunicationStack from "../components/CommunicationStack";
import CompleteSolution from "../components/CompleteSolution";
import BusinessModel from "../components/BusinessModel";
import Industries from "../components/Industries";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurTechnologies />
      <Statistics />  {/* Now appears right after Our Technologies */}
      <Features />
      <BusinessCommunication />
      <CommunicationStack />
      <CompleteSolution />
      <BusinessModel />
      <Industries />
      <Footer />
    </div>
  );
}