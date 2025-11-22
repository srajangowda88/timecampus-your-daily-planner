import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import {
  Calendar,
  BookOpen,
  ListTodo,
  Clock,
  Target,
  AlertCircle,
  CheckSquare,
  BarChart3,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Daily Routine Planner",
      description: "Plan your entire day with an intuitive schedule builder. Set time blocks for classes, study sessions, and breaks.",
    },
    {
      icon: BookOpen,
      title: "Study Scheduler",
      description: "Create personalized study schedules that adapt to your learning style and exam dates.",
    },
    {
      icon: ListTodo,
      title: "Homework & Assignment Tracker",
      description: "Never miss a deadline again. Track all your assignments and homework in one organized place.",
    },
    {
      icon: Clock,
      title: "Class Timetable Generator",
      description: "Generate and manage your class timetables with automatic conflict detection and reminders.",
    },
    {
      icon: Target,
      title: "Habit Builder",
      description: "Build productive habits with daily tracking and streak counters to keep you motivated.",
    },
    {
      icon: AlertCircle,
      title: "Exam Countdown",
      description: "Stay prepared with countdown timers for all your upcoming exams and important dates.",
    },
    {
      icon: CheckSquare,
      title: "Attendance Tracker",
      description: "Monitor your class attendance and maintain the required percentage with ease.",
    },
    {
      icon: BarChart3,
      title: "Productivity Dashboard",
      description: "Visualize your progress with insightful charts and analytics about your study habits.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Powerful Features</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to organize your student life, boost productivity, and achieve academic excellence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Organizing Your Life Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the power of smart routine management. Get started with TimeCampus and take control of your academic journey.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
