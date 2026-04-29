import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

const PETALS = Array.from({ length: 12 });

function FloatingPetal({ index }) {
  const left = `${8 + ((index * 8) % 90)}%`;
  const duration = 6 + (index % 4);
  const delay = (index * 0.7) % 5;
  const size = 14 + (index % 3) * 6;

  return (
    <motion.div
      style={{
        position: "absolute",
        top: -40,
        left,
        fontSize: size,
        pointerEvents: "none",
        zIndex: 0,
      }}
      animate={{ y: ["0vh", "110vh"], rotate: [0, 360], opacity: [0, 1, 1, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    >
      🌸
    </motion.div>
  );
}

export default function Closing() {
  const [wishes, setWishes] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "wishes"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setWishes(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return () => unsub();
  }, []);

  const handleSubmit = async () => {
    if (!name.trim() || !message.trim()) return;
    setLoading(true);
    try {
      await addDoc(collection(db, "wishes"), {
        name: name.trim(),
        message: message.trim(),
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
      setName("");
      setMessage("");
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const addToCalendar = () => {
    const details =
      "You're cordially invited to the wedding of Athira and Shreerang! 🎉%0A%0A" +
      "📍 Guruvayur Temple, Kerala%0A" +
      "⏰ Muhurtam: 7:30 AM – 8:30 AM%0A" +
      "🎊 Reception & Lunch to follow at Gokulam Sabari Hall%0A%0A" +
      "With love, the Budbadkar & Panicker families 🌸";

    const url =
      "https://calendar.google.com/calendar/render?action=TEMPLATE" +
      "&text=💍+Wedding+of+Athira+%26+Shreerang" +
      "&dates=20260610T043000Z/20260610T073000Z" +
      "&location=Guruvayur+Temple,+Guruvayur,+Kerala" +
      "&details=" +
      details +
      "&recur=RDATE:20260607" +
      "&reminder=4320";

    window.open(url, "_blank");
  };

  return (
    <section
      className="relative py-20 px-5 flex flex-col items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #FFF8F0 0%, #FDE8EE 40%, #3D1A1A 100%)",
      }}
    >
      {/* Floating petals */}
      {PETALS.map((_, i) => (
        <FloatingPetal key={i} index={i} />
      ))}

      {/* Love note */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center mb-14 max-w-sm"
      >
        <div className="flex items-center gap-3 mb-8 w-full max-w-xs">
          <div
            style={{
              flex: 1,
              height: 1,
              background: "linear-gradient(to right, transparent, #C9A84C)",
            }}
          />
          <span style={{ color: "#C9A84C" }}>✦</span>
          <div
            style={{
              flex: 1,
              height: 1,
              background: "linear-gradient(to left, transparent, #C9A84C)",
            }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: "'Cinzel', serif",
            color: "#C9A84C",
            letterSpacing: "0.2em",
          }}
          className="text-xs uppercase mb-4"
        >
          A note from us
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#2A161A",
            fontSize: 19,
            lineHeight: 1.8,
          }}
          className="mb-6 italic"
        >
          "From our families to yours — thank you for being part of our story.
          Your presence means the world to us. Come, celebrate, and let's make
          memories that last a lifetime."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          style={{
            fontFamily: "'Pinyon Script', cursive",
            color: "#C9A84C",
            fontSize: 42,
          }}
        >
          Athira & Shreerang
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-3xl mt-2"
        >
          <img
            src="/close.png"
            alt="Athira & Shreerang"
            style={{
              width: 220,
              height: 220,
              objectFit: "contain",
              maskImage:
                "radial-gradient(ellipse 80% 80% at center, black 50%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 80% at center, black 50%, transparent 100%)",
            }}
            className="mt-2"
          />
        </motion.span>
      </motion.div>

      {/* Add to Calendar */}
      <motion.button
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        whileTap={{ scale: 0.95 }}
        onClick={addToCalendar}
        className="relative z-10 px-7 py-3 rounded-full mb-16 flex items-center gap-2"
        style={{
          border: "1px solid #C9A84C",
          background: "transparent",
          cursor: "pointer",
          fontFamily: "'Cinzel', serif",
          color: "#C9A84C",
          fontSize: 11,
          letterSpacing: "0.15em",
        }}
      >
        📌 Add to Calendar
      </motion.button>

      {/* Wishes Wall */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-sm"
      >
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            color: "#C9A84C",
            letterSpacing: "0.2em",
          }}
          className="text-xs uppercase mb-2 text-center"
        >
          Leave a wish
        </p>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#8B3A3A",
            fontSize: 32,
          }}
          className="text-center mb-6"
        >
          Send a message for the couple!
        </h3>

        {/* Input form */}
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-3 mb-8"
            >
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl outline-none"
                style={{
                  background: "#FFF5F7",
                  border: "1px solid #C9A84C55",
                  fontFamily: "'EB Garamond', serif",
                  fontSize: 16,
                  color: "#2A161A",
                }}
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your wish for the couple..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl outline-none resize-none"
                style={{
                  background: "#FFF5F7",
                  border: "1px solid #C9A84C55",
                  fontFamily: "'EB Garamond', serif",
                  fontSize: 16,
                  color: "#2A161A",
                }}
              />
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                disabled={loading || !name.trim() || !message.trim()}
                className="py-3 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #8B6914)",
                  fontFamily: "'Cinzel', serif",
                  color: "#FAF3E0",
                  fontSize: 12,
                  letterSpacing: "0.15em",
                  cursor: loading ? "wait" : "pointer",
                  opacity: !name.trim() || !message.trim() ? 0.5 : 1,
                }}
              >
                {loading ? "Sending..." : "✦ Send Wishes ✦"}
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center mb-8 py-6"
            >
              <p className="text-4xl mb-2">🥹</p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#2A161A",
                  fontSize: 22,
                }}
              >
                Thank you! Your wish means the world 💛
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#C9A84C",
                  fontSize: 11,
                  marginTop: 12,
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                }}
              >
                + Add another wish
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wishes cards */}
        <div className="flex flex-col gap-4">
          <AnimatePresence>
            {wishes.map((wish) => (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="p-4 rounded-2xl"
                style={{
                  background: "rgba(255,245,247,0.85)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid #C9A84C33",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "#C9A84C",
                    fontSize: 12,
                  }}
                  className="mb-1"
                >
                  {wish.name} ✦
                </p>
                <p
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    color: "#2A161A",
                    fontSize: 16,
                    lineHeight: 1.6,
                  }}
                >
                  {wish.message}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Final sign off */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1 }}
        className="relative z-10 flex flex-col items-center mt-20"
      >
        <div className="flex items-center gap-3 mb-6 w-full max-w-xs">
          <div
            style={{
              flex: 1,
              height: 1,
              background: "linear-gradient(to right, transparent, #C9A84C55)",
            }}
          />
          <span style={{ color: "#C9A84C55" }}>✦</span>
          <div
            style={{
              flex: 1,
              height: 1,
              background: "linear-gradient(to left, transparent, #C9A84C55)",
            }}
          />
        </div>
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            color: "#FAF3E055",
            fontSize: 10,
            letterSpacing: "0.2em",
          }}
          className="uppercase"
        >
          10 · 06 · 2026 · Guruvayur
        </p>
        <p
          style={{
            fontFamily: "'Pinyon Script', cursive",
            color: "#C9A84C88",
            fontSize: 32,
            marginTop: 8,
          }}
        >
          with love ♥
        </p>
      </motion.div>
    </section>
  );
}
