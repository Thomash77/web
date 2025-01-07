import { Parallax } from "react-parallax";
import { useMediaQuery } from "react-responsive";

const Industries = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1023px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const parallaxStrength = isDesktop ? 250 : isTablet ? 120 : 40;

  const industries = [
    { title: "Healthcare", description: "Revolutionizing patient care with AI-driven insights." },
    { title: "Finance", description: "Optimizing risk analysis and fraud detection." },
    { title: "Retail", description: "Enhancing customer experiences with personalization." },
  ];

  return (
    <Parallax bgImage="/industries-bg.jpg" strength={parallaxStrength}>
      <div className="py-20 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="p-6 bg-white text-gray-800 shadow-lg rounded-lg hover:shadow-xl transition">
                <h3 className="text-xl font-semibold mb-4">{industry.title}</h3>
                <p>{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Industries;