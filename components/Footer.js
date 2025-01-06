const Footer = () => {
    return (
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Branding */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Dynamic AI</h2>
            <p className="text-sm">Empowering businesses with AI-driven solutions.</p>
          </div>
  
          {/* Navigation Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#features" className="hover:underline">
              Features
            </a>
            <a href="#about" className="hover:underline">
              About Us
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
  
          {/* Contact Details */}
          <div className="text-center md:text-right">
            <p>Email: <a href="mailto:info@dynamic-ai.com" className="hover:underline">info@dynamic-ai.com</a></p>
            <p>Phone: <a href="tel:+123456789" className="hover:underline">+1 234 567 89</a></p>
          </div>
        </div>
  
        {/* Social Media Icons */}
        <div className="mt-6 text-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src="/facebook-icon.svg" alt="Facebook" className="inline-block w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src="/twitter-icon.svg" alt="Twitter" className="inline-block w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src="/linkedin-icon.svg" alt="LinkedIn" className="inline-block w-6 h-6" />
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;