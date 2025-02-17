"use client";

import { motion } from "framer-motion";
import GuitarCard from "../components/GuitarCard"; // Import GuitarCard

export default function Home() {
  // Hero Image (Larger & More Impactful)
  const heroImage = { src: "/433.JPG", alt: "Hero Image", caption: "Image 8" };

  // Define guitar images for "Recent Collaborations"
  const guitarImages = [
    { src: "/guitar1.webp", title: "Acoustic Sessions", genre: "Folk / 2023" },
    { src: "/guitar2.webp", title: "Electric Dreams", genre: "Rock / 2022" },
    { src: "/guitar3.webp", title: "Jazz Improvisations", genre: "Jazz / 2021" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#6D6A75]">
      {/* Hero Section - Light Pastel Theme */}
      <section className="relative h-screen flex items-center justify-center bg-[#FAF7F2] pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center p-12 md:p-24 bg-[#FFFFFF] border-[12px] border-[#DCE7F2] rounded-3xl shadow-xl shadow-[#EEECEC]/50"
        >
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="w-full max-w-[98%] md:max-w-[85%] lg:max-w-[80%] h-auto object-cover rounded-xl"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* Recent Collaborations Section */}
      <section id="work" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#A89E8D]">
              Recent Collaborations
            </h2>
            <p className="text-[#9D9A9F] max-w-xl mx-auto">
              Featured projects with visionary artists and brands
            </p>
          </motion.div>

          {/* Render Guitar Cards in a Soft Pastel Container */}
          <div className="bg-[#F4EDE4] rounded-lg p-10 md:p-14 shadow-lg shadow-[#EEECEC]/60">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {guitarImages.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.08)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#FFFFFF] rounded-xl p-6 shadow-md border-[3px] border-[#E3D8C7] hover:border-[#C5B8A5] transition-all"
                >
                  <GuitarCard image={image} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
