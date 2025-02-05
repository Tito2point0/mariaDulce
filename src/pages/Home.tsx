"use client";

import { motion } from "framer-motion";
import GuitarCard from "../components/GuitarCard"; // Import GuitarCard

export default function Home() {
  // Only display one image instead of carousel
  const heroImage = { src: "/433.JPG", alt: "Hero Image", caption: "Image 8" };

  // Define guitar images for "Recent Collaborations"
  const guitarImages = [
    { src: "/guitar1.webp", title: "Acoustic Sessions", genre: "Folk / 2023" },
    { src: "/guitar2.webp", title: "Electric Dreams", genre: "Rock / 2022" },
    { src: "/guitar3.webp", title: "Jazz Improvisations", genre: "Jazz / 2021" },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Hero Section (Only One Image) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="border-4 border-gray-200 p-4">
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </section>

      {/* Recent Collaborations Section */}
      <section id="work" className="py-24 bg-neutral-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Recent Collaborations</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              Featured projects with visionary artists and brands
            </p>
          </motion.div>

          {/* Render Guitar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guitarImages.map((image, index) => (
              <GuitarCard key={index} image={image} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
