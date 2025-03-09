import { motion } from "framer-motion";
import {
  BookOpen,
  Trophy,
  Rocket,
  ShieldCheck,
  Users,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    title: "AI-Powered Mock Interviews",
    description: "Practice coding and verbal skills with AI-driven evaluations.",
    icon: Rocket,
    color: "text-purple-500",
    bg: "bg-purple-100",
  },
  {
    title: "Leaderboard & Rankings",
    description: "Stay motivated with competitive rankings and scores.",
    icon: Trophy,
    color: "text-yellow-500",
    bg: "bg-yellow-100",
  },
  {
    title: "Expert-Curated Questions",
    description: "Get high-quality practice questions tailored to your needs.",
    icon: BookOpen,
    color: "text-blue-500",
    bg: "bg-blue-100",
  },
  {
    title: "Secure & Reliable Platform",
    description: "Ensure a seamless and safe learning experience.",
    icon: ShieldCheck,
    color: "text-green-500",
    bg: "bg-green-100",
  },
  {
    title: "Community & Support",
    description: "Join a network of learners and mentors to grow together.",
    icon: Users,
    color: "text-orange-500",
    bg: "bg-orange-100",
  },
  {
    title: "Instant Feedback & Analytics",
    description: "Track your progress with in-depth performance insights.",
    icon: CheckCircle,
    color: "text-indigo-500",
    bg: "bg-indigo-100",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center relative">
      {/* Background Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50 blur-2xl -z-10"></div>

      {/* Title */}
      <motion.h2
        className="text-5xl font-extrabold text-gray-900 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose <span className="text-blue-600">MyPyramidExam.ai</span>?
      </motion.h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`relative p-8 rounded-2xl shadow-xl flex flex-col items-center space-y-4 backdrop-blur-lg bg-white/60 border border-gray-200`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full ${feature.bg}`}
            >
              <feature.icon className={`w-10 h-10 ${feature.color}`} />
            </div>
            <h3 className="text-2xl font-semibold">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>

            {/* Floating Design Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-blue-300 bg-opacity-30 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-10 h-10 bg-purple-300 bg-opacity-30 rounded-full"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
