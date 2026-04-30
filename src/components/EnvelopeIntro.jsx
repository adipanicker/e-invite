import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnvelopeIntro({ onComplete }) {
  const [stage, setStage] = useState("idle");
  const [gone, setGone] = useState(false);

  const handleClick = () => {
    if (stage !== "idle") return;
    setStage("opening");
    setTimeout(() => {
      setGone(true);
      onComplete();
    }, 2800);
  };

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          key="envelope-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, #FFF5F7 0%, #FDE8EE 50%, #FFF0E6 100%)",
          }}
        >
          {/* Gold particles */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                left: `${8 + ((i * 15) % 85)}%`,
                bottom: -8,
                width: 3,
                height: 3,
                borderRadius: "50%",
                background: "#E8A0B0",
                boxShadow: "0 0 6px #E8A0B0",
                pointerEvents: "none",
              }}
              animate={{ y: [0, -700], opacity: [0, 0.8, 0.8, 0] }}
              transition={{
                duration: 5 + (i % 4),
                delay: (i * 0.5) % 4,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Envelope container */}
          <div
            onClick={handleClick}
            className="cursor-pointer relative"
            style={{
              width: 300,
              height: 210,
              perspective: 1200,
              perspectiveOrigin: "50% 50%",
            }}
          >
            {/* ① ENVELOPE BACK */}
            <motion.div
              animate={stage === "opening" ? { opacity: 0 } : { opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 16,
                background: "linear-gradient(145deg, #FDF6E3, #F5E6C8)",
                border: "1px solid #C9A84C66",
                zIndex: 1,
                boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
              }}
            />

            {/* ② LETTER */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={
                stage === "opening"
                  ? { y: -90, opacity: 1 }
                  : { y: 90, opacity: 0 }
              }
              transition={{
                y: { delay: 1.3, duration: 2.5, ease: [0.2, 0, 0.2, 1] },
                opacity: { delay: 1.3, duration: 0.3 },
              }}
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                right: 16,
                height: 180,
                borderRadius: 10,
                background: "linear-gradient(145deg, #FFFDF5, #FFF3D0)",
                border: "1px solid #C9A84C44",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              }}
            >
              {/* Inner double border */}
              <div
                style={{
                  position: "absolute",
                  inset: 8,
                  border: "1px solid #C9A84C33",
                  borderRadius: 6,
                  pointerEvents: "none",
                }}
              />

              <p
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#C9A84C",
                  fontSize: 9,
                  letterSpacing: "0.3em",
                }}
              >
                ✦ WITH LOVE ✦
              </p>

              <p
                style={{
                  fontFamily: "'Pinyon Script', cursive",
                  color: "#2A161A",
                  fontSize: 42,
                  lineHeight: 1.1,
                }}
              >
                You're Invited
              </p>

              <div
                style={{
                  width: 50,
                  height: 1,
                  background:
                    "linear-gradient(to right, transparent, #C9A84C, transparent)",
                }}
              />

              <p
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#8B6914",
                  fontSize: 11,
                  letterSpacing: "0.15em",
                }}
              >
                ATHIRA & SHREERANG
              </p>

              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  color: "#5C4A2A",
                  fontSize: 13,
                }}
              >
                10 · 06 · 2026
              </p>
            </motion.div>

            {/* ③ ENVELOPE FRONT BODY */}
            <motion.div
              animate={stage === "opening" ? { opacity: 0 } : { opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 16,
                background: "linear-gradient(145deg, #F5E6C8, #EDD99A)",
                border: "1px solid #C9A84C55",
                zIndex: 3,
                overflow: "hidden",
              }}
            >
              {/* Left fold */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, #F0DDA7, #E8D49A)",
                  clipPath: "polygon(0 0, 52% 52%, 0 100%)",
                }}
              />
              {/* Right fold */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(225deg, #F0DDA7, #E8D49A)",
                  clipPath: "polygon(100% 0, 48% 52%, 100% 100%)",
                }}
              />
              {/* Bottom fold */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(0deg, #E5CF8D, #F3E4B8)",
                  clipPath: "polygon(0 100%, 50% 47%, 100% 100%)",
                }}
              />
              {/* Bottom left fold shadow */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: 0,
                  borderStyle: "solid",
                  borderWidth: "98px 0 0 150px",
                  borderColor: "transparent transparent transparent #C9A84C18",
                }}
              />
              {/* Bottom right fold shadow */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: 0,
                  height: 0,
                  borderStyle: "solid",
                  borderWidth: "98px 150px 0 0",
                  borderColor: "transparent #C9A84C18 transparent transparent",
                }}
              />
              {/* Center line */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 1,
                  height: 112,
                  background: "#C9A84C22",
                }}
              />
            </motion.div>

            {/* ④ ENVELOPE FLAP */}
            {/* ④ ENVELOPE FLAP */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={
                stage === "opening"
                  ? { rotateX: -180, opacity: 0 }
                  : { rotateX: 0, opacity: 1 }
              }
              transition={{
                rotateX: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
                opacity: { delay: 0.8, duration: 0.4 },
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "52%",
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
                zIndex: 4,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  overflow: "hidden",
                  borderRadius: "16px 16px 0 0",
                }}
              >
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderStyle: "solid",
                    borderWidth: "110px 150px 0 150px",
                    borderColor: "#EDD99A transparent transparent transparent",
                  }}
                />
              </div>
            </motion.div>

            {/* Wax seal */}
            <motion.div
              animate={
                stage === "opening"
                  ? { scale: 0, opacity: 0 }
                  : { scale: 1, opacity: 1 }
              }
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                top: "44%",
                left: "42.5%",
                transform: "translate(-50%, -50%)",
                zIndex: 5,
                width: 48,
                height: 48,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at 35% 35%, #C0392B, #7B0D0D)",
                border: "2px solid #C9A84C88",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(139,26,26,0.6)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#FAF3E0",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >
                ❤️
              </span>
            </motion.div>
          </div>

          {/* Tap hint */}
          <motion.div
            animate={{ opacity: stage === "opening" ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 mt-10"
          >
            <div style={{ width: 24, height: 1, background: "#C9A84C55" }} />
            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#C9A84C",
                fontSize: 10,
                letterSpacing: "0.25em",
              }}
            >
              TAP TO OPEN
            </motion.p>
            <div style={{ width: 24, height: 1, background: "#C9A84C55" }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
