"use client"

import { Github, Twitter, Linkedin, Instagram, Mail, Heart } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com/deltacoder2603", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/srikant-pandey-b55935209/", label: "LinkedIn" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/_a_tesorino_/", label: "Instagram" },
    { icon: <Mail size={18} />, href: "mailto:srisrikantpandey@gmail.com", label: "Email" },
  ]

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="fixed bottom-4 inset-x-4 z-50 p-4 border-t border-green-200 dark:border-green-700 bg-white dark:bg-black shadow-lg rounded-xl"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Branding */}
        <div className="flex items-center gap-2">
          <Heart className="text-green-600 dark:text-green-400 w-4 h-4" />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Ayurveda AI
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}
