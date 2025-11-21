"use client";
import React, { useState } from "react";
import Image from "next/image"; // Recommended for Next.js for optimized images
import type { StaticImageData } from "next/image";

// Import your images
const imageC = "/images/image_compression.png";
const audioC = "/images/audio_compression.png";
const videoC = "/images/video_compression.png";
const pray = "/images/Orthodox_Praying .png";
const fitPulse = "/images/Fit Pulse.png";
const quickNotes = "/images/Quick Notes.png";
const smartWatchSync = "/images/Smart Watch Sync.png";
const tvStreamer = "/images/TV Streamer.png";
const carDashCompanion = "/images/Car Dash Companion.png";

// --- Type Definitions ---
interface App {
  name: string;
  description: string;
  platform?: string; // Optional for mobile/desktop apps
  deviceType?: string; // Optional for other devices
  image: string | StaticImageData; // Allow string paths or imported images
  downloadLink: string;
}

interface StarRatingProps {
  rating: number;
  onRate: (star: number) => void;
}

interface AppCardProps {
  app: App;
  isMobile?: boolean; // Optional, if you have specific mobile rendering logic
}

// --- Data for apps ---
const mobileApps: App[] = [
  {
    name: "Orthodox Praying App",
    description:
      "Stay connected to God — track your prayers and spiritual journey daily.",
    platform: "Android",
    image: pray,
    downloadLink:
      "https://expo.dev/accounts/binaol/projects/Prayer/builds/5572f5b6-81dd-447a-b601-9cdf3919dbdc",
  },
  {
    name: "Fit Pulse",
    description: "Monitor your workouts and health metrics on Android.",
    platform: "Android",
    image: fitPulse,
    downloadLink: "https://example.com/download/fit-pulse.apk",
  },
  {
    name: "Quick Notes",
    description: "Take notes and sync across all iOS devices.",
    platform: "iOS",
    image: quickNotes,
    downloadLink: "https://example.com/download/quick-notes.ipa",
  },
];

const desktopApps: App[] = [
  {
    name: "Video Compression",
    description: "We are concerned about your space being overcrowded.",
    platform: "Windows",
    image: videoC,
    downloadLink: "https://example.com/download/video-compression.exe",
  },
  {
    name: "Audio Compression",
    description: "We are concerned about your space being overcrowded.",
    platform: "macOS",
    image: audioC,
    downloadLink: "https://example.com/download/audio-compression.app",
  },
  {
    name: "Image Compression",
    description: "We are concerned about your space being overcrowded.",
    platform: "Windows",
    image: imageC,
    downloadLink: "https://example.com/download/image-compression.exe",
  },
];

const otherDevices: App[] = [
  {
    name: "Smart Watch Sync",
    description: "Sync your fitness data to your smart watch.",
    deviceType: "Smart Watch",
    image: smartWatchSync,
    downloadLink: "https://example.com/download/smart-watch-sync",
  },
  {
    name: "TV Streamer",
    description: "Stream content directly to your smart TV.",
    deviceType: "Smart TV",
    image: tvStreamer,
    downloadLink: "https://example.com/download/tv-streamer",
  },
  {
    name: "Car Dash Companion",
    description: "Enhance your driving experience with real-time stats.",
    deviceType: "Car Dashboard",
    image: carDashCompanion,
    downloadLink: "https://example.com/download/car-dash-companion",
  },
];

// --- StarRating component ---
function StarRating({ rating, onRate }: StarRatingProps) {
  return (
    <div className="flex space-x-1 mt-2" aria-label="Star rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRate(star)}
          className="text-yellow-600 text-xl focus:outline-none"
          aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
        >
          {star <= rating ? "★" : "☆"}
        </button>
      ))}
    </div>
  );
}

// --- AppCard component ---
function AppCard({ app }: AppCardProps) {
  const [rating, setRating] = useState<number>(0);

  return (
    <div className="border neon-border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-amber-100 dark:bg-gray-800 flex flex-col items-center">
      {app.image && (
        <div className="w-full h-40 relative mb-4">
          {" "}
          {/* Added relative parent for Next/Image */}
          <Image
            src={app.image}
            alt={app.name}
            layout="fill" // Fill the parent div
            objectFit="contain" // Contain the image within the bounds
            loading="lazy"
          />
        </div>
      )}
      <h3 className="text-lg text-blue-950 dark:text-amber-50 font-semibold text-center">
        {app.name}
      </h3>
      <p className="text-sm text-blue-950 dark:text-amber-50 mb-4 text-center">
        {app.description}
      </p>
      <a
        href={app.downloadLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border-2 dark:text-amber-400 hover:text-white hover:bg-yellow-600 px-6 py-2 rounded-full transition"
      >
        Download for {app.platform || app.deviceType}
      </a>
      <StarRating rating={rating} onRate={setRating} />
    </div>
  );
}

// --- Main ProductPage component ---
const ProductPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 space-y-16 min-h-screen bg-opacity-80 backdrop-blur-sm dark:bg-primary dark:bg-opacity-80 text-primary dark:text-white">
      {/* Mobile Apps */}
      <section>
        <h2 className="text-2xl text-amber-500 font-bold mb-6 text-gold">
          Mobile Applications
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mobileApps.map((app) => (
            <AppCard key={app.name} app={app} isMobile={true} />
          ))}
        </div>
      </section>

      {/* Desktop Apps */}
      <section>
        <h2 className="text-2xl text-amber-500 font-bold mb-6 text-gold">
          Computer Applications
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {desktopApps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </section>

      {/* Other Devices */}
      {otherDevices.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-amber-500 mb-6 text-gold">
            Other Devices
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherDevices.map((app) => (
              <AppCard key={app.name} app={app} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPage;
