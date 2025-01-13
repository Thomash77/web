import ScrollAnimation from "./ScrollAnimation";

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-6">
        <ScrollAnimation direction="up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Join the AI-Powered Advertising Era
          </h1>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.2}>
          <p className="text-lg md:text-2xl mb-8">
            Transform your campaigns with real-time AI insights and automation for unmatched ROI.
          </p>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.4}>
          <div className="space-x-4">
            <a
              href="#features"
              className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Learn More
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Hero;