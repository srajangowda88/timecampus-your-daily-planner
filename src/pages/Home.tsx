import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-illustration.jpg";

const Home = () => {
  const benefits = [
    "Organize your daily routine effortlessly",
    "Track assignments and deadlines",
    "Build productive study habits",
    "Never miss an exam or class",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 flex-1">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                🎓 Built for Students
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Master Your Day with{" "}
                <span className="text-primary">TimeCampus</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                A smart routine manager built for students. Stay organized, boost productivity, and achieve your academic goals.
              </p>

              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link to="/dashboard">
                  <Button size="lg" className="gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button size="lg" variant="outline">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl"></div>
              <img
                src={heroImage}
                alt="Student using TimeCampus for time management"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
