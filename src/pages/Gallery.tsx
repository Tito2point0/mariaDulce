"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "../components/ui/apple-cards-carousel"; // Adjust the import path if needed

// Image list for the gallery
const galleryImages = [
  { src: "/02.JPG", alt: "Gallery Image 1", caption: "" },
  { src: "/33.JPG", alt: "Gallery Image 2", caption: "" },
  { src: "/37.JPG", alt: "Gallery Image 3", caption: "" },
  { src: "/53.JPG", alt: "Gallery Image 4", caption: "" },
  { src: "/62.JPG", alt: "Gallery Image 5", caption: "" },
  { src: "/66.JPG", alt: "Gallery Image 6", caption: "" },
  { src: "/70.JPG", alt: "Gallery Image 7", caption: "" },
  { src: "/433.JPG", alt: "Gallery Image 8", caption: "" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 text-neutral-900 py-12 px-6 pt-24 ">
      {/* Header with Framer Motion Animation */}
      <motion.h1
        className="text-center text-4xl font-bold text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📸 Explore Our Gallery
      </motion.h1>

      {/* Gallery Section */}
      <div className="container mx-auto">
        <Carousel
          items={galleryImages.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // Set a custom width on each carousel item:
              className="relative group overflow-hidden rounded-xl w-[500px] md:w-[800px]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[400px] md:h-[600px] object-cover rounded-xl transition-transform duration-500"
                loading="lazy"
                onClick={() => setSelectedImage(image.src)}
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg">{image.caption}</span>
              </div>
            </motion.div>
          ))}
        />
      </div>

      {/* Modal to View Image Fullscreen */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full"
          >
            <button
              className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-lg font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ✖ Close
            </button>
            <img
              src={selectedImage}
              alt="Full View"
              className="w-full h-[80vh] object-contain rounded-xl"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
