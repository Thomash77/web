const CompleteSolution = () => {
    return (
      <div className="py-20 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center">
          {/* Right: Text Content */}
          <div className="md:w-1/2 text-center md:text-left px-6">
            <h2 className="text-3xl font-bold mb-4">Complete AI-Powered Solution</h2>
            <p className="text-lg text-gray-700 mb-6">
              Harness the power of AI with our all-in-one solutions designed to 
              enhance productivity, streamline workflows, and deliver measurable results.
            </p>
            <a
              href="#features"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Discover Features
            </a>
          </div>
  
          {/* Left: Visual Content */}
          <div className="md:w-1/2 mt-10 md:mt-0 px-6">
            <img
              src="/complete-solution.jpg"
              alt="Complete AI-Powered Solution"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default CompleteSolution;