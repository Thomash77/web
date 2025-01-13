import Hero from "../components/Hero";
import OurTechnologies from "../components/OurTechnologies";
import Features from "../components/Features";
import Statistics from "../components/Statistics";
import BusinessCommunication from "../components/BusinessCommunication";
import CommunicationStack from "../components/CommunicationStack";  // Moved here
import CompleteSolution from "../components/CompleteSolution";
import BusinessModel from "../components/BusinessModel";
import Industries from "../components/Industries";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurTechnologies />
      <Features />
      <Statistics />
      <BusinessCommunication />
      <CommunicationStack />  {/* Now appears after Business Communication */}
      <CompleteSolution />
      <BusinessModel />
      <Industries />
      <Footer />
    </div>
  );
}