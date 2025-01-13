const CommunicationStack = () => {
  const features = [
    { icon: "🤖", title: "Agentic AI", description: "Autonomous agents capable of decision-making and performing tasks without human intervention." },
    { icon: "🧠", title: "Symantic AI", description: "Understanding and processing natural language to derive meaning and context." },
    { icon: "🎨", title: "Generative AI", description: "Creating new content, such as text, images, or music, based on learned patterns." },
    { icon: "🔮", title: "Predictive AI", description: "Analyzing data to forecast future outcomes and trends." },
    { icon: "💬", title: "Interactive AI", description: "Engaging with users through conversational interfaces and interactive experiences." },
    { icon: "🔧", title: "Adaptive AI", description: "Learning and improving from interactions and data over time to enhance performance." },
  ];

  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">The AI Communication Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
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

export default CommunicationStack;