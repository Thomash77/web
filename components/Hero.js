const Hero = () => {
    return (
      <div
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/cortex-bg.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
  
        {/* Content */}
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">
            Empower Your Business with AI
          </h1>
          <p className="text-xl mb-6">
            Discover cutting-edge solutions designed to transform your operations and drive growth.
          </p>
          <div className="space-x-4">
            <a
              href="#learn-more"
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;