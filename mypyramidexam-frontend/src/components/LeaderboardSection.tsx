import { motion } from "framer-motion";
import { Trophy, Users } from "lucide-react";

const leaderboardData = [
  { name: "John Doe", score: 98 },
  { name: "Jane Smith", score: 95 },
  { name: "Alex Brown", score: 90 },
  { name: "Emily Johnson", score: 88 },
  { name: "Daniel Lee", score: 85 },
];

const LeaderboardSection = () => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto relative">
      {/* Glowing Background for Premium Feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50 blur-2xl -z-10"></div>

      {/* Title */}
      <motion.h2
        className="text-5xl font-extrabold text-gray-900 flex items-center justify-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Trophy className="w-10 h-10 text-yellow-500 mr-3 animate-pulse" />
        Top Performers
      </motion.h2>

      {/* Leaderboard Container */}
      <motion.div
        className="backdrop-blur-lg bg-white/60 shadow-2xl rounded-2xl p-8 border border-gray-200"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="space-y-4">
          {leaderboardData.map((user, index) => (
            <motion.li
              key={index}
              className={`flex justify-between items-center py-4 px-6 rounded-lg border ${
                index === 0
                  ? "bg-yellow-300 bg-opacity-40 border-yellow-500 shadow-lg"
                  : "bg-gray-100 border-gray-300"
              }`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xl font-semibold text-gray-900 flex items-center">
                <Users
                  className={`w-6 h-6 mr-3 ${
                    index === 0 ? "text-yellow-600" : "text-blue-500"
                  }`}
                />
                {user.name}
              </span>
              <span
                className={`text-2xl font-bold ${
                  index === 0 ? "text-yellow-700" : "text-blue-600"
                }`}
              >
                {user.score} pts
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Floating Glowing Elements for Extra Aesthetic */}
      <motion.div
        className="absolute -top-5 left-12 w-10 h-10 bg-yellow-300 bg-opacity-40 rounded-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <motion.div
        className="absolute -bottom-6 right-10 w-12 h-12 bg-blue-300 bg-opacity-40 rounded-full"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </section>
  );
};

export default LeaderboardSection;
