"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CanvasRevealEffect } from "../components/ui/canvas-reveal-effect"; // Adjust path if needed

interface ImageProps {
  src: string;
  title: string;
  genre: string;
}

const GuitarCard = ({ image }: { image: ImageProps }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{ scale: 1.02 }}
      className="relative group overflow-hidden rounded-2xl aspect-square"
    >
      {/* Background Image */}
      <img
        src={image.src}
        alt={image.title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Canvas Reveal Effect (Only on hover) */}
      {isHovering && (
        <div className="absolute inset-0 pointer-events-none">
          <CanvasRevealEffect
            containerClassName="absolute inset-0 bg-transparent"
            animationSpeed={0.4} // Adjusted for a smoother effect
            opacities={[0.1, 0.1, 0.2, 0.3, 0.3, 0.5, 0.5, 0.7, 0.7, 1]}
            colors={[[200, 200, 200]]} // Lighter color effect
            dotSize={3}
            showGradient={false}
          />
        </div>
      )}

      {/* Card content overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-transparent to-transparent p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold mb-2">{image.title}</h3>
        <p className="text-rose-400 text-sm">{image.genre}</p>
      </div>
    </motion.div>
  );
};

export default GuitarCard;
