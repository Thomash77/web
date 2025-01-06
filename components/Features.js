const Features = () => {
    const features = [
      {
        title: "AI Insights",
        description: "Analyze massive data at scale with our AI-driven analytics.",
        icon: "💡",
      },
      {
        title: "Automation",
        description: "Streamline business operations effortlessly.",
        icon: "⚙️",
      },
      {
        title: "Personalization",
        description: "Deliver tailored experiences for every customer.",
        icon: "🎯",
      },
    ];
  
    return (
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;