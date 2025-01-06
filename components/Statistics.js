const Statistics = () => {
    const stats = [
      {
        value: "500+",
        description: "Successful AI Implementations",
      },
      {
        value: "95%",
        description: "Customer Satisfaction Rate",
      },
      {
        value: "50+",
        description: "Industries Served",
      },
    ];
  
    return (
      <div className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-6xl font-extrabold mb-4">{stat.value}</div>
                <p className="text-lg">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Statistics;