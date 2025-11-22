import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  Clock,
  BookOpen,
  CheckCircle,
  TrendingUp,
  AlertCircle,
} from "lucide-react";

const Dashboard = () => {
  const todaysRoutine = [
    { time: "9:00 AM", task: "Mathematics Lecture", type: "class" },
    { time: "11:00 AM", task: "Study Physics Chapter 5", type: "study" },
    { time: "2:00 PM", task: "Computer Science Lab", type: "class" },
    { time: "4:00 PM", task: "Complete Chemistry Assignment", type: "homework" },
  ];

  const upcomingExams = [
    { subject: "Mathematics", date: "in 5 days", status: "upcoming" },
    { subject: "Physics", date: "in 12 days", status: "prepared" },
    { subject: "Chemistry", date: "in 18 days", status: "upcoming" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your overview for today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-3xl font-bold">4</span>
                </div>
                <p className="text-muted-foreground font-medium">Tasks Today</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-3xl font-bold">6.5h</span>
                </div>
                <p className="text-muted-foreground font-medium">Study Hours</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <span className="text-3xl font-bold">12</span>
                </div>
                <p className="text-muted-foreground font-medium">Completed</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-orange-500" />
                  </div>
                  <span className="text-3xl font-bold">85%</span>
                </div>
                <p className="text-muted-foreground font-medium">Productivity</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Today's Routine */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Today's Routine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todaysRoutine.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex-shrink-0 w-20 text-sm font-medium text-muted-foreground">
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{item.task}</p>
                        <span className="text-xs text-muted-foreground capitalize">
                          {item.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Exam Countdown */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Upcoming Exams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingExams.map((exam, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium">{exam.subject}</h4>
                        <span className="text-sm text-muted-foreground">{exam.date}</span>
                      </div>
                      <Progress value={exam.status === "prepared" ? 80 : 40} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-2 capitalize">
                        Status: {exam.status}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Study Progress */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Weekly Study Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, index) => (
                  <div key={day} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{day}</span>
                      <span className="text-muted-foreground">
                        {6 - index * 0.5}h / 8h
                      </span>
                    </div>
                    <Progress value={(6 - index * 0.5) * 12.5} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
