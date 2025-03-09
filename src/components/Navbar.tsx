import React from "react";
import { motion } from "framer-motion";
import { Menu, X, Home, Trophy, FileText, Users, Star } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Features", href: "#features", icon: Star },
  { name: "Leaderboard", href: "#leaderboard", icon: Trophy },
  { name: "Exams", href: "#exams", icon: FileText },
  { name: "Testimonials", href: "#testimonials", icon: Users },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-white shadow-md backdrop-blur-md"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
    >
      {/* Floating Circles */}
      <motion.div
        className="absolute -top-10 left-10 w-16 h-16 bg-blue-400/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.div
        className="absolute top-16 right-20 w-12 h-12 bg-indigo-300/30 rounded-full blur-2xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.h1
            className="md:text-4xl text-2xl font-extrabold text-gray-900 tracking-wide cursor-pointer flex items-center gap-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            🤖 MyPyramidExam.ai
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ name, href, icon: Icon }, index) => (
              <motion.a
                key={index}
                href={href}
                className="relative flex items-center gap-2 text-gray-900 font-medium transition hover:text-blue-600"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Icon className="w-5 h-5" /> {name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            onClick={() => setIsOpen(true)}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="w-7 h-7 text-gray-900 hover:text-blue-600 transition" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <Transition show={isOpen} as={React.Fragment}>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
          <Transition.Child
            as={React.Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-lg" aria-hidden="true" />
          </Transition.Child>

          <Transition.Child
            as={React.Fragment}
            enter="transition-transform duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 w-72 bg-white/90 backdrop-blur-md shadow-xl p-6 rounded-l-3xl">
              {/* Close Button */}
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-blue-600">Menu</h2>
                <button onClick={() => setIsOpen(false)}>
                  <X className="w-7 h-7 text-gray-700 hover:text-blue-600 transition" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="mt-6 space-y-5 text-lg">
                {navItems.map(({ name, href, icon: Icon }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    className="block flex items-center gap-3 text-gray-800 hover:text-blue-600 transition"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5" /> {name}
                  </motion.a>
                ))}
              </nav>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </motion.nav>
  );
};

export default Navbar;