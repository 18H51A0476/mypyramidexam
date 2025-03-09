import { motion } from "framer-motion";
import { FileText, Code, MessageCircle } from "lucide-react";

const examData = [
  {
    title: "Aptitude Test",
    description: "Test your logical reasoning and problem-solving skills.",
    icon: FileText,
    color: "text-green-500",
    glow: "shadow-green-400/50",
  },
  {
    title: "Coding Challenge",
    description: "Solve real-world coding problems to enhance your skills.",
    icon: Code,
    color: "text-blue-500",
    glow: "shadow-blue-400/50",
  },
  {
    title: "Verbal Ability",
    description: "Improve your communication and comprehension skills.",
    icon: MessageCircle,
    color: "text-purple-500",
    glow: "shadow-purple-400/50",
  },
];

const LatestExamsSection = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto relative">
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50 blur-2xl -z-10"></div>

      {/* Section Heading */}
      <motion.h2
        className="text-5xl font-extrabold text-gray-900 flex items-center justify-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📝 Latest <span className="text-blue-600 ml-2">Exams</span>
      </motion.h2>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {examData.map((exam, index) => (
          <motion.div
            key={index}
            className={`p-8 bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-transform ${exam.glow}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.08 }}
          >
            <exam.icon className={`w-14 h-14 ${exam.color} mb-4`} />
            <h3 className="text-2xl font-semibold">{exam.title}</h3>
            <p className="text-gray-700 mt-3">{exam.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Design Elements */}
      <motion.div
        className="absolute -top-6 left-12 w-10 h-10 bg-green-300 bg-opacity-40 rounded-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <motion.div
        className="absolute -bottom-6 right-16 w-12 h-12 bg-blue-300 bg-opacity-40 rounded-full"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </section>
  );
};

export default LatestExamsSection;
