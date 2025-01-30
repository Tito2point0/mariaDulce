import { motion } from 'framer-motion';
import { FiYoutube, FiInstagram,  } from 'react-icons/fi';
// import { useState } from 'react';

export default function Home() {
//   const [isVideoOpen, setVideoOpen] = useState(false);

  // Array of your guitar images
  const guitarImages = [
    { src: '/guitar1.webp', title: 'Acoustic Sessions', genre: 'Folk / 2023' },
    { src: '/guitar2.webp', title: 'Electric Dreams', genre: 'Rock / 2022' },
    { src: '/guitar3.webp', title: 'Jazz Improvisations', genre: 'Jazz / 2021' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950 text-neutral-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">
            Sonic Canvas<br/>Through Strings
          </h1>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Crafting emotional landscapes through innovative guitar compositions and boundary-pushing performances.
          </p>
          <div className="flex justify-center space-x-4">
            <button
            //   onClick={() => setVideoOpen(true)}
              className="bg-rose-500 hover:bg-rose-600 px-8 py-3 rounded-full font-semibold transition-all flex items-center"
            >
              <FiYoutube className="mr-2" /> Play Showreel
            </button>
            <a
              href="#contact"
              className="border border-rose-500 hover:bg-rose-500/10 px-8 py-3 rounded-full transition-all"
            >
              Collaborate Now
            </a>
          </div>
        </motion.div>
      </section>

      {/* Featured Section */}
      <section id="work" className="py-24 bg-neutral-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Recent Collaborations</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">Featured projects with visionary artists and brands</p>
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

      {/* Social Links */}
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