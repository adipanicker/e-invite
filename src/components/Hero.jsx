import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TARGET = new Date("2026-06-10T00:00:00");

function getTimeLeft() {
  const diff = TARGET - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default function Hero() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/couple.jpg')",
          backgroundSize: "cover",
          // You might want to reset this closer to "center center" now that the text is moved!
          backgroundPosition: "center 20%",
          zIndex: 0,
        }}
      />

      {/* Top Gradient Overlay (Shortened since only intro text is here now) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "25%",
          background:
            "linear-gradient(to bottom, rgba(42,10,20,0.6) 0%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* Bottom Gradient Overlay (Taller to cover the names as well) */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "65%",
          background:
            "linear-gradient(to top, rgba(42,10,20,0.9) 0%, rgba(42,10,20,0.4) 60%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* --- TOP CONTENT (Intro Text Only) --- */}
      <div className="relative z-10 flex flex-col items-center w-full pt-16 gap-1">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: "'Cinzel', serif",
            color: "#C9A84C",
            letterSpacing: "0.25em",
          }}
          className="text-xs md:text-sm uppercase text-center px-4 mb-4 drop-shadow-md"
        >
          ✦ Together they begin forever ✦
        </motion.p>
      </div>

      {/* --- BOTTOM CONTENT (Names, Details & Countdown) --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pb-10 w-full">
        {/* Names moved down here */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ fontFamily: "'Pinyon Script', cursive", color: "#C9A84C" }}
          className="text-6xl md:text-7xl font-light leading-none"
        >
          Athira
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{ fontFamily: "'Pinyon Script', cursive", color: "#C9A84C" }}
          className="text-4xl md:text-5xl font-light leading-none my-1"
        >
          &amp;
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          style={{ fontFamily: "'Pinyon Script', cursive", color: "#C9A84C" }}
          className="text-6xl md:text-7xl font-light leading-none mb-4"
        >
          Shreerang
        </motion.h1>

        {/* Families */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          style={{
            fontFamily: "'Cinzel', serif",
            color: "#FAF3E0BB",
            letterSpacing: "0.2em",
          }}
          className="text-xs uppercase mb-5"
        >
          Budbadkar &nbsp;✦&nbsp; Panicker
        </motion.p>

        {/* Date & Venue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col items-center gap-1 mb-6"
        >
          <div
            style={{
              width: 60,
              height: 1,
              background:
                "linear-gradient(to right, transparent, #C9A84C, transparent)",
            }}
          />
          <p
            style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C" }}
            className="text-xs tracking-widest mt-3"
          >
            10th June 2026
          </p>
          <p
            style={{ fontFamily: "'EB Garamond', serif", color: "#FAF3E0CC" }}
            className="text-sm mt-1"
          >
            Guruvayur, Kerala
          </p>
          <div
            style={{
              width: 60,
              height: 1,
              background:
                "linear-gradient(to right, transparent, #C9A84C, transparent)",
              marginTop: 12,
            }}
          />
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex gap-4 md:gap-5"
        >
          {[
            { label: "Days", value: time.days },
            { label: "Hours", value: time.hours },
            { label: "Mins", value: time.minutes },
            { label: "Secs", value: time.seconds },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center">
              <div
                style={{
                  border: "1px solid #C9A84C55",
                  background: "#0D0A0688",
                  backdropFilter: "blur(8px)",
                  minWidth: 62,
                }}
                className="rounded-lg px-3 py-2 flex flex-col items-center"
              >
                <span
                  style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C" }}
                  className="text-2xl font-medium tabular-nums"
                >
                  {String(value).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "#FAF3E099",
                    fontSize: 9,
                  }}
                  className="uppercase tracking-widest mt-1"
                >
                  {label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
          style={{ color: "#FAF3E055", fontFamily: "'Cinzel', serif" }}
          className="text-xs tracking-widest mt-8"
        >
          scroll to explore ↓
        </motion.p>
      </div>
    </section>
  );
}
