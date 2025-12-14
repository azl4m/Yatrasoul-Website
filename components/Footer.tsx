import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand + Socials */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-white">
              <img
                src="/assets/Logojpg-removebg-preview.png"
                alt="Yatra Soul"
                className="h-12 w-auto bg-white/10 rounded-lg p-1"
              />
              <span className="text-2xl font-bold">Yatra Soul</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Crafting unforgettable journeys with heart and soul. Travel is not
              sightseeing — it's connection.
            </p>

            {/* Social Icons with Working Links */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61584017741311"
                target="_blank"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/yatra___soul?igsh=YmV4MHlobWY4ZW9i"
                target="_blank"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://twitter.com/yatrasoul"
                target="_blank"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all"
              >
                <Twitter size={18} />
              </a>

              <a
                href="https://youtube.com/@yatrasoul"
                target="_blank"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                "About Us",
                "Our Packages",
                "Destinations",
                "Travel Blog",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-travel-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-travel-500 mt-0.5" />
                <span>
                  48/93 A <br /> Elamakkara, Kochi
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-travel-500" />
                <a
                  href="tel:+919633513007"
                  className="hover:text-travel-400 transition-colors"
                >
                  +91 96335 13007
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-travel-500" />
                <a
                  href="mailto:sales@yatrasoul.com"
                  className="hover:text-travel-400 transition-colors"
                >
                  sales@yatrasoul.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-xs text-gray-500 mb-4">
              Enter your email for exclusive offers and travel tales.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-800 border-none rounded-lg py-3 px-4 text-sm text-white focus:ring-1 focus:ring-travel-500"
              />
              <button className="w-full bg-travel-600 hover:bg-travel-700 text-white font-bold py-3 rounded-lg text-sm transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Yatra Soul Inc. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
