import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Urban Regeneration",
    details: {
      Delivery: "Art Direction, Visual Identity, Web",
      Año: "2023",
      Acerca:
        "Urban Regeneration is a transformative project that has redefined the cityscape of Stratton, a historic city in the UK with an eye toward the future. In partnership with the Stratton City Council, the project has turned dilapidated and underused urban areas into pulsating spots of culture and community gathering. With a mission to rejuvenate the local economy and foster a sense of togetherness, these spaces have been meticulously curated to enhance the city’s vibrancy and provide welcoming environments for residents and visitors alike. Stratton now stands as a paragon of how thoughtful urban development can create sustainable, lively communities while preserving the unique character of the city.",
      Diseño:
        "At the heart of Urban Regeneration lies a visionary design philosophy that balances aesthetic appeal with functional space. Each café storefront, characterized by a distinct monochromatic theme, not only serves as a visual landmark but also harmonizes with Stratton’s urban fabric. The design process was deeply rooted in the ethos of ‘form follows function’, with every element serving a purpose – from the ergonomically designed furniture to the energy-efficient layout that maximizes natural light. The use of striking colors serves as a beacon of warmth and invitation, transforming these spaces into modern oases amidst the urban hustle. This approach has not only revitalized the city’s image but also laid down a blueprint for integrating modern design principles into community-centric spaces.",
    },
    images: ["/urban-1.webp", "/urban-2.webp", "/urban-3.webp"],
  },
  {
    title: "Jungle Beat Ensemble",
    details: {
      Delivery: "Art Direction, Product Design, Visual Identity",
      Año: "2023",
      Acerca:
        "The Jungle Beats Ensemble merges whimsical animal designs with high-quality sound, creating an engaging audio experience for all ages. Each piece, from the roaring tiger radio to the charming panda turntable, is engineered for durability and clear acoustics. This collection isn’t just about listening to music—it’s about playful interaction, a touch of nature, and the joy of shared moments.",
      Diseño:
        "The design of the Jungle Beats Ensemble takes center stage with its bold colors and endearing animal motifs that invite interaction and storytelling. The tiger radio, with its striking orange hue and playful features, captures the essence of the jungle’s vibrant energy. The panda turntable setups, in classic monochrome with heartwarming details, echo the gentle nature of these beloved creatures. Every curve and contour is intentional, crafted not only for visual impact but also for ergonomic handling by its users, young and old. Attention to detail is evident in the tactile elements and user-friendly interfaces of each piece. The products boast a sturdy build, ready to withstand the eager touches of a child’s exploration. From the portable radio’s easy-to-grip handle to the turntable’s smooth, vinyl-spinning surface, the design invites users to engage with both sight and touch. The Jungle Beats Ensemble stands as a testament to design that goes beyond aesthetics, offering a multisensory experience that harmonizes the natural charm of the wild with the rhythms of modern life.",
    },
    images: ["/jungle-1.webp", "/jungle-2.webp", "/jungle-3.webp"],
  },
];

export default function Work() {
  return (
    <div className="min-h-screen bg-neutral-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-24 last:mb-0"
          >
            <h2 className="text-4xl font-playfair font-bold text-neutral-900 mb-8">
              {project.title}
            </h2>

            {/* Details Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-4">
                {Object.entries(project.details).map(
                  ([key, value]) =>
                    key !== "Acerca" &&
                    key !== "Diseño" && (
                      <div
                        key={key}
                        className="border-b border-neutral-200 pb-2"
                      >
                        <span className="font-semibold text-neutral-600">
                          {key}_
                        </span>
                        <p className="text-neutral-800">{value}</p>
                      </div>
                    )
                )}
              </div>

              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Acerca de_
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {project.details.Acerca}
                </p>
              </div>
            </div>
          
          {/* Design Section */}
<div className="p-8 bg-blue-50 border border-blue-400 rounded-xl shadow-md space-y-6 mb-8">  
  <h3 className="headerBody text-2xl font-bold text-blue-700 uppercase">
    Diseño_
  </h3>
  <p className="text-neutral-700 text-lg">
    {project.details.Diseño}
  </p>
</div>

{/* Image Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
  {project.images.map((img, idx) => (
    <motion.div
      key={idx}
      whileHover={{ scale: 1.02 }}
      className="aspect-square bg-neutral-100 rounded-lg overflow-hidden"
    >
      <img
        src={img}
        alt={`${project.title} ${idx + 1}`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </motion.div>
  ))}
</div>
</motion.article>
        ))}
        
        {/* Call to Action */}

        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Want to collaborate?
          </Link>
        </div>
      </div>
    </div>
  );
}
