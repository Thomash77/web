const About = () => {
    return (
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Left: Text Content */}
          <div className="md:w-1/2 text-center md:text-left px-6">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Dynamic AI, we are dedicated to transforming businesses with
              cutting-edge AI technologies. Our mission is to empower companies
              to innovate and excel in an increasingly digital world.
            </p>
            <p className="text-lg text-gray-700">
              With a team of industry-leading experts, we provide AI-driven
              solutions tailored to meet the unique needs of every client.
            </p>
          </div>
  
          {/* Right: Image */}
          <div className="md:w-1/2 mt-10 md:mt-0 px-6">
            <img
              src="/about-image.jpg"
              alt="About Dynamic AI"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default About;