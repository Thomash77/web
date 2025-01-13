import Hero from "../components/Hero";
import OurTechnologies from "../components/OurTechnologies";
import Statistics from "../components/Statistics";
import Features from "../components/Features";
import BusinessCommunication from "../components/BusinessCommunication";
import CommunicationStack from "../components/CommunicationStack";
import CompleteSolution from "../components/CompleteSolution";
import BusinessModel from "../components/BusinessModel";
import Industries from "../components/Industries";
import QuoteSection from "../components/QuoteSection";  // Import Quote Section
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurTechnologies />
      <Statistics />

      {/* Quote 1 */}
      <QuoteSection
        quote="AI reduces wasted ad spend in programmatic advertising by 25%."
        source="Source: Deloitte"
      />

      <Features />
      <BusinessCommunication />

      {/* Quote 2 */}
      <QuoteSection
        quote="63% of digital advertisers rely on AI for data-driven programmatic strategies."
        source="Source: IAB"
      />

      <CommunicationStack />
      <CompleteSolution />

      {/* Quote 3 */}
      <QuoteSection
        quote="Programmatic campaigns using AI achieve 20% higher engagement rates on average."
        source="Source: Accenture"
      />

      <BusinessModel />
      <Industries />
      <Footer />
    </div>
  );
}