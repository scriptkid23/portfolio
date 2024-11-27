// pages/index.tsx
"use client";

import dynamic from "next/dynamic";

// Dynamically load AnimatedWord without SSR
const AnimatedWord = dynamic(() => import("./components/AnimatedWord"), {
  ssr: false,
});

const Home: React.FC = () => {
  return <AnimatedWord text="MARINA" />;
};

export default Home;
