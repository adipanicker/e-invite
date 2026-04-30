import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    name: "Mehendi",
    tagline: "Henna & Heritage",
    emoji: "🌿",
    date: "8th June 2026",
    time: "5:00 PM Onwards",
    venue: "Adat, Thrissur",
    sublocation: "At the family home",
    description: "Mehendi, music and mingling - let's begin!",
    dressCode: "Dress in shades of Green — Fresh & festive",
    photo: "/mehendi.jpeg",
    overlay:
      "linear-gradient(to bottom, rgba(60,80,40,0.3) 0%, rgba(30,50,20,0.82) 100%)",
    accentColor: "#7BAF5A",
    tagBg: "#EEF5E6",
    tagText: "#3A5E1A",
    mapsUrl: "https://maps.google.com/?q=Adat+Thrissur",
  },
  {
    id: 2,
    name: "Haldi",
    tagline: "Sunshine & Turmeric",
    emoji: "🌸",
    date: "9th June 2026",
    time: "10:00 AM Onwards",
    venue: "Adat, Thrissur",
    sublocation: "At the family home",
    description: "Come ready to get messy, laugh loud & glow brighter!",
    dressCode: "Vintage yellow - No prints, keep it minimal",
    photo: "/haldi.jpeg",
    overlay:
      "linear-gradient(to bottom, rgba(180,100,0,0.3) 0%, rgba(120,60,0,0.75) 100%)",
    accentColor: "#F5A623",
    tagBg: "#FFF3D6",
    tagText: "#8B5E00",
    mapsUrl: "https://maps.google.com/?q=Adat+Thrissur",
  },
  {
    id: 3,
    name: "Wedding",
    tagline: "Blessings & Beginnings",
    emoji: "🛕",
    date: "10th June 2026",
    time: "Muhurtam 7:30 AM – 8:30 AM",
    venue: "Guruvayur Temple",
    sublocation: "Guruvayur, Kerala",
    description: "The sacred union - the moment we've been waiting for!",
    dressCode: null,
    photo: "/guruvayur.jpeg",
    overlay:
      "linear-gradient(to bottom, rgba(100,50,0,0.2) 0%, rgba(60,20,0,0.80) 100%)",
    accentColor: "#C9A84C",
    tagBg: "#FDF3DC",
    tagText: "#7A5800",
    mapsUrl: "https://maps.google.com/?q=Guruvayur+Temple",
  },
  {
    id: 4,
    name: "Reception",
    tagline: "Blessings & Celebrations",
    emoji: "✨",
    date: "10th June 2026",
    time: "10:00 AM Onwards · Followed by Lunch",
    venue: "Gokulam Sabari Hall",
    sublocation: "Guruvayur, Kerala",
    description: "Tradition & celebration - ending in a grand sadhya!",
    dressCode: "Men — Mundu & Shirt · Women — Saree",
    photo: "/reception1.jpg",
    overlay:
      "linear-gradient(to bottom, rgba(80,20,40,0.3) 0%, rgba(50,10,20,0.82) 100%)",
    accentColor: "#E8A0B0",
    tagBg: "#FDEEF2",
    tagText: "#8B2040",
    mapsUrl: "https://maps.google.com/?q=Gokulam+Sabari+Hall+Guruvayur",
  },
  {
    id: 5,
    name: "Sangeet",
    tagline: "Sunsets & Shenanigans",
    emoji: "🎉",
    date: "10th June 2026",
    time: "6:00 PM Onwards",
    venue: "Deja Blu",
    sublocation: "Vadanappally, Thrissur",
    description: "Sunset vows to starlit dancefloor - glam & groove await!",
    dressCode: "Indo Western glam - Dress to impress!",
    photo: "/dejablu.jpeg",
    overlay:
      "linear-gradient(to bottom, rgba(150,80,0,0.2) 0%, rgba(80,30,0,0.82) 100%)",
    accentColor: "#FF8C42",
    tagBg: "#FFF0E0",
    tagText: "#8B4000",
    mapsUrl: "https://maps.google.com/?q=Deja+Blu+Snehatheeram+Thrissur",
  },
];

export default function Events() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        background:
          "linear-gradient(to bottom, #FFF0E6 0%, #F9E0C0 30%, #F5D5A8 70%, #FFF0D0 100%)",
      }}
      className="py-20 px-5 flex flex-col items-center"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 w-full max-w-xs">
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
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          fontFamily: "'Cinzel', serif",
          color: "#C9A84C",
          letterSpacing: "0.2em",
        }}
        className="text-xs uppercase mb-3"
      >
        Mark your calendars
      </motion.p>

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
        className="text-5xl mb-12 text-center"
      >
        The Celebrations
      </motion.h2>

      {/* Event Cards */}
      <div className="flex flex-col gap-6 w-full max-w-sm">
        {events.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
            className="relative rounded-3xl overflow-hidden"
            style={{ minHeight: 320 }}
          >
            {/* Background photo */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url('${event.photo}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: event.overlay,
              }}
            />

            {/* Card content */}
            <div
              className="relative z-10 p-6 flex flex-col h-full"
              style={{ minHeight: 320 }}
            >
              {/* Top tag */}
              <div
                className="self-start px-3 py-1 rounded-full mb-4"
                style={{
                  background: `${event.tagBg}CC`,
                  backdropFilter: "blur(4px)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: event.tagText,
                    fontSize: 10,
                    letterSpacing: "0.15em",
                  }}
                >
                  ✦ {event.tagline} ✦
                </span>
              </div>

              {/* Emoji */}
              <span className="text-4xl mb-2">{event.emoji}</span>

              {/* Event name */}
              <h3
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  color: "#FAF3E0",
                  fontSize: 52,
                  lineHeight: 1.1,
                }}
                className="mb-1"
              >
                {event.name}
              </h3>

              {/* Date & time */}
              <p
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: event.accentColor,
                  fontSize: 11,
                  letterSpacing: "0.15em",
                }}
                className="uppercase mb-3"
              >
                {event.date} · {event.time}
              </p>

              <div
                style={{
                  width: 40,
                  height: 1,
                  background: event.accentColor,
                  opacity: 0.6,
                  marginBottom: 12,
                }}
              />

              {/* Venue */}
              <p
                style={{
                  fontFamily: "'EB Garamond', serif",
                  color: "#FAF3E0",
                  fontSize: 16,
                }}
              >
                📍 {event.venue}
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  color: "#FAF3E0AA",
                  fontSize: 14,
                }}
                className="mb-3"
              >
                {event.sublocation}
              </p>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'EB Garamond', serif",
                  color: "#FAF3E0CC",
                  fontSize: 15,
                }}
                className="mb-4 flex-1"
              >
                {event.description}
              </p>

              {/* Dress Code */}
              {event.dressCode && (
                <div
                  className="px-3 py-2 rounded-xl mb-4"
                  style={{
                    background: `${event.tagBg}CC`,
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'EB Garamond', serif",
                      color: event.tagText,
                      fontSize: 14,
                      lineHeight: 1.5,
                    }}
                  >
                    {event.dressCode}
                  </p>
                </div>
              )}

              {/* Directions button */}
              {event.mapsUrl && (
                <a
                  href={event.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start px-5 py-2 rounded-full flex items-center gap-2"
                  style={{
                    background: event.accentColor,
                    fontFamily: "'Cinzel', serif",
                    color: "#1A0A00",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textDecoration: "none",
                  }}
                >
                  📍 Get Directions
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom divider */}
      <div className="flex items-center gap-3 mt-14 w-full max-w-xs">
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
    </motion.section>
  );
}
