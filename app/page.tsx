// pages/index.tsx
"use client";

import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

// Dynamically load AnimatedWord without SSR
const AnimatedWord = dynamic(() => import("./components/AnimatedWord"), {
  ssr: false,
});

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Home;
