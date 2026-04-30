import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  { src: "/1.jpg", alt: "Engagement 1" },
  { src: "/2.jpg", alt: "Engagement 2" },
  { src: "/3.jpg", alt: "Engagement 3" },
  { src: "/4.jpg", alt: "Engagement 4" },
  { src: "/51.jpg", alt: "Engagement 5" },
  { src: "/6.jpg", alt: "Engagement 6" },
  { src: "/7.jpg", alt: "Engagement 7" },
  { src: "/8.jpg", alt: "Engagement 8" },
  { src: "/9.JPG", alt: "Engagement 9" },
  { src: "/10.jpg", alt: "Engagement 10" },
  { src: "/11.jpg", alt: "Engagement 11" },
  { src: "/12.jpg", alt: "Engagement 12" },
  { src: "/13.jpg", alt: "Engagement 13" },
  { src: "/14.jpg", alt: "Engagement 14" },
  { src: "/15.jpg", alt: "Engagement 15" },
];

export default function Glimpses() {
  const [showPhotos, setShowPhotos] = useState(false);
  const scrollRef = useRef(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="py-20 flex flex-col items-center text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #FFF0E6 0%, #FDE8EE 60%, #FFF5F7 100%)",
      }}
    >
      {/* Divider top */}
      <div className="flex items-center gap-3 mb-10 w-full max-w-xs px-6">
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

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          fontFamily: "'Cinzel', serif",
          color: "#C9A84C",
          letterSpacing: "0.2em",
        }}
        className="text-xs uppercase mb-3 px-6"
      >
        In case you missed it
      </motion.p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontWeight: 300,
          color: "#2A161A",
          fontSize: 44,
        }}
        className="text-5xl mb-3 px-6"
      >
        The Engagement
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.6 }}
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "#5C2030",
          fontSize: 17,
        }}
        className="mb-10 px-6 max-w-xs"
      >
        Where it all became official 💍
      </motion.p>

      {/* CTA Button */}
      <AnimatePresence mode="wait">
        {!showPhotos ? (
          <motion.button
            key="btn"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowPhotos(true)}
            className="px-8 py-4 rounded-full mb-10"
            style={{
              border: "1px solid #C9A84C",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#C9A84C",
                letterSpacing: "0.15em",
                fontSize: 12,
              }}
            >
              ✦ Tap to see Glimpses ✦
            </span>
          </motion.button>
        ) : (
          <motion.p
            key="hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              fontFamily: "'EB Garamond', serif",
              color: "#5C2030AA",
              fontSize: 13,
            }}
            className="mb-6 px-6"
          >
            swipe to explore →
          </motion.p>
        )}
      </AnimatePresence>

      {/* Photo Strip */}
      <AnimatePresence>
        {showPhotos && (
          <motion.div
            key="photos"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full"
          >
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto px-6 pb-4"
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {photos.map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  style={{
                    scrollSnapAlign: "center",
                    flexShrink: 0,
                    width: "72vw",
                    maxWidth: 280,
                    height: "90vw",
                    maxHeight: 360,
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid #C9A84C33",
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    style={{ display: "block" }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {photos.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#C9A84C55",
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom divider */}
      <div className="flex items-center gap-3 mt-12 w-full max-w-xs px-6">
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
