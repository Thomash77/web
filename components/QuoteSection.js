import ScrollAnimation from "./ScrollAnimation";

const QuoteSection = ({ quote, source }) => {
  return (
    <ScrollAnimation direction="up">
      <div className="py-10 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          <p className="text-xl italic mb-2">"{quote}"</p>
          <p className="text-sm text-gray-400">— {source}</p>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default QuoteSection;