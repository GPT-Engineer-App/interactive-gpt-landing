import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="flex justify-between items-center p-4 bg-background">
        <div className="text-2xl font-bold">GPT Engineer</div>
        <nav className="hidden md:flex space-x-4">
          <NavLink to="/" className="hover:text-primary transition-colors">Home</NavLink>
          <NavLink to="/features" className="hover:text-primary transition-colors">Features</NavLink>
          <NavLink to="/use-cases" className="hover:text-primary transition-colors">Use Cases</NavLink>
          <NavLink to="/contact" className="hover:text-primary transition-colors">Contact</NavLink>
        </nav>
        <Button>Get Started</Button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to GPT Engineer</h1>
        <p className="text-xl md:text-2xl mb-6">Revolutionizing the way you develop and market applications</p>
        <Button variant="secondary" size="lg">Learn More</Button>
      </section>

      {/* Unique Propositions Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose GPT Engineer?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Development</h3>
            <p>Leverage the power of AI to streamline your development process.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Boost Productivity</h3>
            <p>Automate repetitive tasks and focus on what matters.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Seamless Collaboration</h3>
            <p>Enhance teamwork with integrated tools and features.</p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-muted">
        <h2 className="text-3xl font-bold text-center mb-10">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background p-6 rounded-lg shadow-lg">
            <img src="/placeholder.svg" alt="Developer" className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">For Developers</h3>
            <p>Accelerate your coding with AI-assisted tools and features.</p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-lg">
            <img src="/placeholder.svg" alt="Marketer" className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">For Marketers</h3>
            <p>Create compelling marketing campaigns with AI-driven insights.</p>
          </div>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Experience the Future</h2>
        <div className="max-w-md mx-auto bg-primary text-primary-foreground p-8 rounded-lg shadow-lg transition-transform hover:scale-105 cursor-pointer">
          <p className="text-center text-lg">Click me to see the magic!</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-muted mt-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <NavLink to="/privacy" className="mr-4 hover:text-primary transition-colors">Privacy Policy</NavLink>
            <NavLink to="/terms" className="mr-4 hover:text-primary transition-colors">Terms of Service</NavLink>
            <NavLink to="/contact" className="hover:text-primary transition-colors">Contact Us</NavLink>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-2xl">📘</a>
            <a href="#" className="text-2xl">🐦</a>
            <a href="#" className="text-2xl">📸</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;