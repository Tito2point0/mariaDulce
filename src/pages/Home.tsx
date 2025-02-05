"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiYoutube, FiInstagram } from "react-icons/fi";
// Import your CanvasRevealEffect component from its file
import { CanvasRevealEffect } from "../components/ui/canvas-reveal-effect"; // adjust the path as needed
// ;

export default function Home() {
  // Define your carousel images for the hero section (if needed)
  const carouselImages = [
    { src: "/02.JPG", alt: "Carousel Image 1", caption: "Image 1" },
    { src: "/33.JPG", alt: "Carousel Image 2", caption: "Image 2" },
    { src: "/37.JPG", alt: "Carousel Image 3", caption: "Image 3" },
    { src: "/53.JPG", alt: "Carousel Image 4", caption: "Image 4" },
    { src: "/62.JPG", alt: "Carousel Image 5", caption: "Image 5" },
    { src: "/66.JPG", alt: "Carousel Image 6", caption: "Image 6" },
    { src: "/70.JPG", alt: "Carousel Image 7", caption: "Image 7" },
    { src: "/433.JPG", alt: "Carousel Image 8", caption: "Image 8" },
  ];

  const [currentHero, setCurrentHero] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  // Define your guitar images for the "Recent Collaborations" cards
  const guitarImages = [
    { src: "/guitar1.webp", title: "Acoustic Sessions", genre: "Folk / 2023" },
    { src: "/guitar2.webp", title: "Electric Dreams", genre: "Rock / 2022" },
    { src: "/guitar3.webp", title: "Jazz Improvisations", genre: "Jazz / 2021" },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* (Optional) Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        <AnimatePresence>
          <motion.div
            key={currentHero}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="border-4 border-gray-200 p-4">
              <img
                src={carouselImages[currentHero].src}
                alt={carouselImages[currentHero].alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </AnimatePresence>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guitarImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative group overflow-hidden rounded-2xl aspect-square"
              >
                {/* Background Image */}
                <img
                  src={image.src}
                  alt={`Guitar project ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Canvas Reveal Effect Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <CanvasRevealEffect
                    // Ensure the containerClassName makes the effect container transparent:
                    containerClassName="absolute inset-0 bg-transparent"
                    animationSpeed={0.4}
                    opacities={[
                      0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1,
                    ]}
                    colors={[[0, 255, 255]]}
                    dotSize={3}
                    showGradient={false}
                  />
                </div>

                {/* Card Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-transparent to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-rose-400 text-sm">{image.genre}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
}
