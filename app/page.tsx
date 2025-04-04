"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Aurora from "@/components/Aurora/Aurora"
import Navbar from "@/components/Navbar"
import { Leaf } from "lucide-react"
import Footer from "@/components/Footer"

export default function Home() {
  const router = useRouter()
  const { isSignedIn } = useUser()

  const [floatingLeaves, setFloatingLeaves] = useState<
    { id: number; x: number; delay: number; duration: number }[]
  >([])

  useEffect(() => {
    const leaves = Array(5)
      .fill(0)
      .map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 10,
      }))
    setFloatingLeaves(leaves)
  }, [])

  const handleClick = () => {
    if (isSignedIn) {
      router.push("/chat")
    } else {
      router.push("/sign-up")
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Aurora
        colorStops={["#4ade80", "#34d399", "#22c55e"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      {/* Floating leaves animation */}
      {floatingLeaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute opacity-20 z-0"
          style={{ left: `${leaf.x}%`, top: "-10%" }}
          animate={{
            y: ["0vh", "100vh"],
            rotate: [0, 360],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: leaf.delay,
            ease: "linear",
          }}
        >
          <Leaf size={24 + leaf.id * 8} className="text-green-300" />
        </motion.div>
      ))}

      <Navbar />

      <motion.div
        className="z-10 relative flex flex-col items-center justify-center text-center px-4 mt-[-100px] max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-green-500 to-emerald-500"
          variants={itemVariants}
        >
          Ayurveda AI
        </motion.h1>

        <motion.div variants={itemVariants} className="space-y-4 mb-8">
          <motion.p className="text-xl font-medium" variants={itemVariants}>
            Your Intelligent Guide to Natural Healing
          </motion.p>

          <motion.p className="text-lg text-gray-300" variants={itemVariants}>
            Curious about symptoms or looking for holistic remedies? Just ask!
          </motion.p>

          <motion.p className="text-lg text-gray-300" variants={itemVariants}>
            Ayurveda AI combines ancient Ayurvedic wisdom with modern AI to give you natural insights, symptoms, and
            herbal cures—personalized and trustworthy.
          </motion.p>

          <motion.p
            className="text-lg font-medium text-green-400"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            🪔 Ask about any disease. Get Ayurvedic answers instantly.
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} whileHover="hover" whileTap="tap">
          <Button
            onClick={handleClick}
            className="bg-green-500 hover:bg-green-600 text-lg px-8 py-6 rounded-full shadow-lg"
          >
            {isSignedIn ? "Start Chatting" : "Sign Up to Get Started"}
          </Button>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  )
}
