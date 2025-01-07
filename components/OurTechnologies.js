const OurTechnologies = () => {
    const technologies = [
      { icon: "🤖", title: "Machine Learning", description: "Empower decision-making with predictive insights." },
      { icon: "🔍", title: "Natural Language Processing", description: "Enhance communication with AI-driven language tools." },
      { icon: "📊", title: "Data Analytics", description: "Uncover patterns with advanced data processing." },
    ];
  
    return (
      <div className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Cutting-Edge Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="p-6 bg-gray-100 shadow-lg rounded-lg hover:shadow-xl transition">
                <div className="text-5xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default OurTechnologies;