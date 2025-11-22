import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, TrendingUp, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Time Management",
      description: "Help students organize their schedules and make the most of every day.",
    },
    {
      icon: TrendingUp,
      title: "Productivity",
      description: "Boost academic performance through smart planning and habit tracking.",
    },
    {
      icon: Heart,
      title: "Academic Growth",
      description: "Support students in achieving their educational goals with confidence.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">About TimeCampus</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Empowering students to take control of their time and succeed in their academic journey.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-card rounded-2xl p-8 md:p-12 mb-12 border border-border shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At TimeCampus, we believe that effective time management is the foundation of academic success. 
              We created this platform to help students navigate the challenges of balancing classes, 
              assignments, exams, and personal life.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to provide students with intuitive tools that simplify routine management, 
              boost productivity, and reduce stress. We're here to help you make the most of your student life.
            </p>
          </div>

          {/* Values */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Why We Built TimeCampus</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Routine?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Join thousands of students who have mastered their time with TimeCampus.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
