import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const messages = {
  bride: [
    "Yas! Team Bride is unstoppable! 💃",
    "She's got the best squad already! 👑",
    "Team Bride just got stronger! 🌸",
  ],
  groom: [
    "The groom's army grows! 🕺",
    "Shreerang is grateful! 🙌",
    "Boys are back in town! 🎉",
  ],
};

const bridePink = "#E85D8E";
const bridePinkSoft = "#E85D8E22";
const bridePinkText = "#B83267";

export default function TeamPicker() {
  const [votes, setVotes] = useState({ bride: 847, groom: 623 });
  const [chosen, setChosen] = useState(null);
  const [message, setMessage] = useState("");

  const pick = (team) => {
    if (chosen) return;

    const colors =
      team === "bride"
        ? [bridePink, "#F8A8C3", "#FAF3E0"]
        : ["#1A4A2E", "#C9A84C", "#FAF3E0"];

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors,
    });

    setVotes((v) => ({ ...v, [team]: v[team] + 1 }));
    setChosen(team);
    const msgs = messages[team];
    setMessage(msgs[Math.floor(Math.random() * msgs.length)]);
  };

  const total = votes.bride + votes.groom;
  const bridePct = Math.round((votes.bride / total) * 100);
  const groomPct = 100 - bridePct;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative py-20 px-6 flex flex-col items-center text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFEAF3 0%, #FFD6E7 55%, #FFF0F6 100%)",
        backgroundColor: "#FFEAF3",
      }}
    >
      {/* Decorative top divider */}
      <div className="flex items-center gap-3 mb-10 w-full max-w-xs">
        <div
          style={{
            flex: 1,
            height: 1,
            background: "linear-gradient(to right, transparent, #C9A84C)",
          }}
        />
        <span style={{ color: "#C9A84C", fontSize: 18 }}>✦</span>
        <div
          style={{
            flex: 1,
            height: 1,
            background: "linear-gradient(to left, transparent, #C9A84C)",
          }}
        />
      </div>

      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          fontFamily: "'Cinzel', serif",
          color: "#C9A84C",
          letterSpacing: "0.2em",
        }}
        className="text-xs uppercase mb-3"
      >
        Pick your side
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.6 }}
        // UPDATED: Very dark burgundy/black for better harmony with pink
        style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2A161A" }}
        className="text-4xl font-light mb-2"
      >
        Whose side are you on?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        // UPDATED: A soft rose-brown instead of flat grey/brown
        style={{ fontFamily: "'EB Garamond', serif", color: "#5B4345" }}
        className="text-base mb-10"
      >
        Choose wisely. The couple is watching. 👀
      </motion.p>

      {/* Buttons */}
      <div className="flex gap-4 w-full max-w-sm mb-8">
        {/* Team Bride */}
        <motion.button
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => pick("bride")}
          disabled={!!chosen}
          className="flex-1 py-5 rounded-2xl flex flex-col items-center gap-1 transition-all duration-300"
          style={{
            background:
              chosen === "bride" ? bridePink : chosen ? bridePinkSoft : bridePink,
            border: `1px solid ${bridePink}`,
            opacity: chosen && chosen !== "bride" ? 0.4 : 1,
            cursor: chosen ? "default" : "pointer",
          }}
        >
          <span className="text-3xl">💃</span>
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#FAF3E0",
              fontSize: 13,
              letterSpacing: "0.1em",
            }}
          >
            Team Bride
          </span>
          <span
            style={{
              fontFamily: "'EB Garamond', serif",
              color: "#FAF3E0AA",
              fontSize: 13,
            }}
          >
            {votes.bride} strong
          </span>
        </motion.button>

        {/* VS */}
        <div className="flex flex-col items-center justify-center">
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#C9A84C",
              fontSize: 13,
              letterSpacing: "0.15em",
            }}
          >
            VS
          </span>
        </div>

        {/* Team Groom */}
        <motion.button
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => pick("groom")}
          disabled={!!chosen}
          className="flex-1 py-5 rounded-2xl flex flex-col items-center gap-1 transition-all duration-300"
          style={{
            background:
              chosen === "groom" ? "#1A4A2E" : chosen ? "#1A4A2E22" : "#1A4A2E",
            border: "1px solid #1A4A2E",
            opacity: chosen && chosen !== "groom" ? 0.4 : 1,
            cursor: chosen ? "default" : "pointer",
          }}
        >
          <span className="text-3xl">🕺</span>
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#FAF3E0",
              fontSize: 13,
              letterSpacing: "0.1em",
            }}
          >
            Team Groom
          </span>
          <span
            style={{
              fontFamily: "'EB Garamond', serif",
              color: "#FAF3E0AA",
              fontSize: 13,
            }}
          >
            {votes.groom} strong
          </span>
        </motion.button>
      </div>

      {/* Progress bar */}
      <AnimatePresence>
        {chosen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-sm mb-6"
          >
            <div className="flex rounded-full overflow-hidden h-2 mb-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${bridePct}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ background: bridePink }}
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${groomPct}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ background: "#1A4A2E" }}
              />
            </div>
            <div className="flex justify-between">
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: bridePinkText,
                  fontSize: 11,
                }}
              >
                {bridePct}%
              </span>
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#1A4A2E",
                  fontSize: 11,
                }}
              >
                {groomPct}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fun message */}
      <AnimatePresence>
        {message && (
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#2A161A", // UPDATED: Matched the new dark heading color
            }}
            className="text-2xl font-light mb-8"
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Bottom text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
        // UPDATED: Changed from a mustard-gold to a deep, elegant rose/burgundy to pop off the pink
        style={{ fontFamily: "'Great Vibes', cursive", color: "#8B3A3A" }}
        className="text-4xl mb-2"
      >
        We can't wait to celebrate with you!
      </motion.p>

      {/* Bottom divider */}
      <div className="flex items-center gap-3 mt-10 w-full max-w-xs">
        <div
          style={{
            flex: 1,
            height: 1,
            background: "linear-gradient(to right, transparent, #C9A84C)",
          }}
        />
        <span style={{ color: "#C9A84C", fontSize: 18 }}>✦</span>
        <div
          style={{
            flex: 1,
            height: 1,
            background: "linear-gradient(to left, transparent, #C9A84C)",
          }}
        />
      </div>
    </motion.section>
  );
}
