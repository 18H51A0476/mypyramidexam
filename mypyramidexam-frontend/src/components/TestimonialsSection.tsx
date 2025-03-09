import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Lee",
    feedback:
      "This platform has truly helped me prepare for my exams with real-world tests and AI-driven insights!",
  },
  {
    name: "Michael Johnson",
    feedback:
      "The AI-powered mock interviews were a game-changer for my preparation. Highly recommended!",
  },
  {
    name: "Aisha Patel",
    feedback:
      "I loved the leaderboard feature! It kept me motivated to improve my scores every day.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto relative">
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-orange-50 opacity-50 blur-2xl -z-10"></div>

      {/* Section Heading */}
      <motion.h2
        className="text-5xl font-extrabold text-gray-900 flex items-center justify-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ⭐ What <span className="text-yellow-600 ml-2">Our Users Say</span>
      </motion.h2>

      {/* Testimonials Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="p-8 bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-transform"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Animated Stars */}
            <div className="flex space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="text-yellow-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Star className="w-6 h-6" />
                </motion.div>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="italic text-lg text-gray-700">"{testimonial.feedback}"</p>

            {/* Name */}
            <span className="mt-4 font-semibold text-gray-900 text-xl">
              - {testimonial.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Design Elements */}
      <motion.div
        className="absolute -top-6 left-12 w-10 h-10 bg-yellow-300 bg-opacity-40 rounded-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <motion.div
        className="absolute -bottom-6 right-16 w-12 h-12 bg-orange-300 bg-opacity-40 rounded-full"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </section>
  );
};

export default TestimonialsSection;
