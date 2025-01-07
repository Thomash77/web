const BusinessModel = () => {
    const features = [
      { icon: "💼", title: "Subscription", description: "Affordable monthly pricing tailored to your needs." },
      { icon: "📈", title: "Performance-Based", description: "Pay as you grow with scalable AI solutions." },
      { icon: "🔄", title: "Customizable", description: "Flexible solutions that fit your business model." },
    ];
  
    return (
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Flexible Business Model</h2>
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
  
  export default BusinessModel;