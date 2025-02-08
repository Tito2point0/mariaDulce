import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-10 mt-16">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Contact</h2>
            <p className="text-sm text-neutral-400">
              Email:{" "}
              <span className="text-white">dmariahernandezmc@gmail.com</span>
            </p>
            <p className="text-sm text-neutral-400">
              Phone: <span className="text-white">+1 (555) 123-4567</span>
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Follow Me</h2>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://www.instagram.com/dulmaho99/"
                target="blank"
                className="text-neutral-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <FiInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <FiFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition"
                aria-label="Twitter"
              >
                <FiTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Language & Country Selector */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Preferences</h2>
            <div className="flex justify-center md:justify-start space-x-4 text-sm">
              {/* Language Selector */}
              <div>
                <span className="text-neutral-400">Language:</span>{" "}
                <button className="text-white hover:underline">English</button>{" "}
                |{" "}
                <button className="text-white hover:underline">Español</button>
              </div>

              {/* Country Selector */}
              <div>
                <span className="text-neutral-400">Country:</span>{" "}
                <button className="text-white hover:underline">USA</button> |{" "}
                <button className="text-white hover:underline">México</button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Maria Hernandez. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
