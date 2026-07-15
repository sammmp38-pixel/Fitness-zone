import { Dumbbell, Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-neutral-950 rotate-45"></div>
              </div>
              <span className="font-black text-2xl tracking-tighter text-white uppercase">
                Fitness Zone
              </span>
            </div>
            <p className="text-neutral-400 mb-8 text-sm font-medium leading-relaxed max-w-sm">
              Forging elite fitness through hard work, dedication, and an unbeatable community. No excuses, just results.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-brand hover:text-black transition-colors border border-white/10 hover:border-brand">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-brand hover:text-black transition-colors border border-white/10 hover:border-brand">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-brand hover:text-black transition-colors border border-white/10 hover:border-brand">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-2 lg:col-start-6">
            <h4 className="font-black text-white uppercase tracking-tighter mb-6 text-xl">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Classes', 'Trainers', 'Pricing', 'Schedule'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-neutral-400 hover:text-brand transition-colors text-xs font-bold uppercase tracking-widest">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-black text-white uppercase tracking-tighter mb-6 text-xl">Contact Us</h4>
            <ul className="space-y-6 text-sm text-neutral-400 font-medium">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-brand shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <a href="https://maps.google.com/?q=5HXG+X99,+Sohela–Barpali+Road,+Near+Fire+Station,+Barapali+Town,+Gopaipali,+Odisha+–+768029" target="_blank" rel="noopener noreferrer" className="leading-relaxed hover:text-brand transition-colors">
                  Fitness Zone<br />
                  5HXG+X99, Sohela–Barpali Road,<br />
                  Near Fire Station,<br />
                  Barapali Town, Gopaipali,<br />
                  Odisha – 768029
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-brand shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+917381127273" className="hover:text-brand transition-colors">073811 27273</a>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="w-5 h-5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform text-brand">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </span>
                <a href="https://wa.me/917381127273" className="hover:text-brand transition-colors">073811 27273</a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <h4 className="font-black text-white uppercase tracking-tighter mb-6 text-xl">Business Hours</h4>
            <ul className="space-y-3 text-sm text-neutral-400 font-medium">
              <li className="flex justify-between items-center">
                <span className="text-white">Monday - Saturday</span>
                <span className="text-right leading-tight">4:00 AM – 9:00 AM<br />4:00 PM – 9:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-t border-white/10 pt-3">
                <span className="text-white">Sunday</span>
                <span className="text-brand">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Fitness Zone. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
