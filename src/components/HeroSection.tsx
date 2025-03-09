import { motion } from "framer-motion";
import { Button } from "@headlessui/react";
import { Rocket, BrainCircuit, GraduationCap, Trophy } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative mt-16 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white text-center py-24 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="md:text-6xl text-4xl font-extrabold mb-6 leading-tight">
          Elevate Your Skills with <span className="text-yellow-300">MyPyramidExam.ai</span>
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          The ultimate AI-driven platform for coding, aptitude, and verbal training. Learn, practice, and achieve with real-time insights.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
          <Button className="px-6 py-3 bg-white text-blue-600 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-200 transition flex items-center space-x-2">
            <Rocket className="w-5 h-5" />
            <span>Get Started</span>
          </Button>
        </motion.div>
      </motion.div>

      {/* Floating AI Icons */}
      <motion.div
        className="absolute top-12 left-16 bg-white bg-opacity-10 rounded-full p-3 shadow-md"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <BrainCircuit className="w-8 h-8 text-yellow-300" />
      </motion.div>

      <motion.div
        className="absolute bottom-16 right-16 bg-white bg-opacity-10 rounded-full p-3 shadow-md"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <GraduationCap className="w-8 h-8 text-green-300" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-10 bg-white bg-opacity-10 rounded-full p-3 shadow-md"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <Trophy className="w-8 h-8 text-orange-400" />
      </motion.div>

      {/* Decorative Gradient Circle */}
      <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-yellow-400 bg-opacity-20 rounded-full blur-3xl" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400 bg-opacity-30 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
