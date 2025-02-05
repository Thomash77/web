import { Parallax } from "react-parallax";
import { useMediaQuery } from "react-responsive";

const BusinessCommunication = () => {
  // Dynamic parallax strength based on screen size
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1023px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const parallaxStrength = isDesktop ? 300 : isTablet ? 150 : 50;

  return (
    <Parallax bgImage="/business-communication-bg.jpg" strength={parallaxStrength}>
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Left: Text Content */}
          <div className="md:w-1/2 text-center md:text-left px-6">
            <h2 className="text-3xl font-bold mb-4">Empowering Mobile Advertisers with Real-Time AI</h2>
            <p className="text-lg text-gray-700 mb-6">
              Enhance your mobile advertising strategies with cutting-edge AI solutions. Our platform provides real-time insights and automation, allowing advertisers to optimize campaigns, increase engagement, and achieve better ROI. Experience the future of mobile advertising with our advanced AI technology.
            </p>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Learn More
            </a>
          </div>

          {/* Right: Visual Content */}
          <div className="md:w-1/2 mt-10 md:mt-0 px-6">
            <img
              src="/business-communication.jpg"
              alt="Empowering Mobile Advertisers with Real-Time AI"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default BusinessCommunication;