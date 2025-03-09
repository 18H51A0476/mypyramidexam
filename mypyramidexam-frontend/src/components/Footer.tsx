import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Mail, href: "mailto:support@mypyramidexam.ai" },
];

const Footer = () => {
  return (
    <footer className="relative bg-white overflow-hidden py-10 px-6 md:px-12 mt-16">
      {/* Floating Gradient Circles */}
      <motion.div
        className="absolute w-40 h-40 bg-gradient-to-br from-blue-400 to-indigo-600 opacity-30 rounded-full -top-10 -left-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-600 opacity-30 rounded-full -bottom-10 -right-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          MyPyramidExam.ai
        </h2>
        <p className="text-gray-600 max-w-2xl">
          The ultimate platform to master coding, aptitude, and verbal skills
          with AI-powered insights.
        </p>

        {/* Social Icons */}
        <div className="mt-6 flex space-x-6">
          {socialLinks.map(({ icon: Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition"
              whileHover={{ scale: 1.1 }}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>

        {/* Footer Links */}
        <nav className="mt-6 flex flex-wrap justify-center space-x-6 text-gray-700 text-sm">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#features" className="hover:text-blue-500">Features</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
          <a href="#privacy" className="hover:text-blue-500">Privacy Policy</a>
        </nav>

        {/* Copyright */}
        <p className="mt-6 text-gray-500 text-xs">
          © {new Date().getFullYear()} MyPyramidExam.ai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
