import ScrollAnimation from "./ScrollAnimation";

const Statistics = () => {
  const stats = [
    { value: "500+", description: "Successful AI Implementations" },
    { value: "95%", description: "Customer Satisfaction Rate" },
    { value: "50+", description: "Industries Served" },
    { value: "25%", description: "Avg ROI Increase" },  // New Statistic Added
  ];

  return (
    <div className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto text-center">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl font-bold mb-8">Our Impact in Numbers</h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} delay={index * 0.2}>
              <div className="flex flex-col items-center">
                <div className="text-6xl font-extrabold mb-4">{stat.value}</div>
                <p className="text-lg">{stat.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;