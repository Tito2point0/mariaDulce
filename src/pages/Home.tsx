import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiYoutube, FiInstagram } from "react-icons/fi";

export default function Home() {
  // Define your 8 carousel images
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

  const [current, setCurrent] = useState(0);

  // Automatically cycle through the images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  // Keep the existing guitar images for the lower section
  const guitarImages = [
    { src: '/guitar1.webp', title: 'Acoustic Sessions', genre: 'Folk / 2023' },
    { src: '/guitar2.webp', title: 'Electric Dreams', genre: 'Rock / 2022' },
    { src: '/guitar3.webp', title: 'Jazz Improvisations', genre: 'Jazz / 2021' },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Wrap the image with a border and padding for a transitional feel */}
            <div className="border-4 border-gray-200 p-4">
              <img
                src={carouselImages[current].src}
                alt={carouselImages[current].alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Featured Collaborations Section (left unchanged) */}
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
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                <img
                  src={image.src}
                  alt={`Guitar project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-transparent to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-rose-400 text-sm">{image.genre}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links (unchanged) */}
      <div className="fixed left-6 bottom-6 hidden md:flex flex-col space-y-4">
        <a href="#" className="hover:text-rose-400 transition-colors" aria-label="Instagram">
          <FiInstagram size={24} />
        </a>
        <a href="#" className="hover:text-rose-400 transition-colors" aria-label="YouTube">
          <FiYoutube size={24} />
        </a>
      </div>
    </div>
  );
}
