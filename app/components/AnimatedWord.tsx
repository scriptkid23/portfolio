"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

// Define types
interface AnimatedLetterProps {
  letter: string;
}

interface AnimatedWordProps {
  text: string;
}

// Transition configuration
const transition = {
  ease: "easeOut", // Standard ease-out curve
};

// Variants for individual letters
const letterVariant: Variants = {
  initial: { opacity: 0, y: "100%" },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // Faster animation
      ...transition,
    },
  },
};

// AnimatedLetter Component
const AnimatedLetter: React.FC<AnimatedLetterProps> = ({ letter }) => {
  return <motion.span variants={letterVariant}>{letter}</motion.span>;
};

// AnimatedWord Component
const AnimatedWord: React.FC<AnimatedWordProps> = ({ text }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this only runs on the client
    setIsClient(true);
  }, []);

  // Render nothing until we are on the client
  if (!isClient) return null;

  const wordVariant: Variants = {
    animate: (i: number) => ({
      transition: {
        delayChildren: 0.3, // Faster effect
        staggerChildren: 0.1, // Faster stagger
        staggerDirection: i,
      },
    }),
  };

  return (
    <motion.h1
      variants={wordVariant}
      initial="initial"
      animate="animate"
      className="firstExample"
    >
      {text.split("").map((letter, index) => (
        <AnimatedLetter key={index} letter={letter} />
      ))}
    </motion.h1>
  );
};

export default AnimatedWord;
