import { useState } from "react";
import EnvelopeIntro from "./components/EnvelopeIntro";
import Hero from "./components/Hero";
import TeamPicker from "./components/TeamPicker";
import Glimpses from "./components/Glimpses";
import Events from "./components/Events";
import Closing from "./components/Closing";
import { motion } from "framer-motion";

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main>
      <EnvelopeIntro onComplete={() => setIntroComplete(true)} />
      {introComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <TeamPicker />
          <Glimpses />
          <Events />
          <Closing />
        </motion.div>
      )}
    </main>
  );
}
