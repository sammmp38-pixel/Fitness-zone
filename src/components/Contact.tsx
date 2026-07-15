import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Map } from 'lucide-react';

export default function Contact() {
  const isCurrentlyOpen = () => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday
    const hours = now.getHours();
    
    if (day === 0) return false; // Sunday Closed
    
    // 4:00 AM – 9:00 AM OR 4:00 PM (16:00) – 9:00 PM (21:00)
    const isMorningOpen = hours >= 4 && hours < 9;
    const isEveningOpen = hours >= 16 && hours < 21;
    
    return isMorningOpen || isEveningOpen;
  };

  const isOpen = isCurrentlyOpen();

  return (
    <section className="py-24 bg-neutral-900 relative border-t border-white/10" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] md:text-[180px] font-black text-white/5 leading-none select-none pointer-events-none tracking-tighter w-full">CONTACT</div>
          <div className="relative z-10">
            <span className="text-brand font-bold tracking-widest uppercase mb-4 block text-sm">Get in Touch</span>
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Join Us Today
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details & Map */}
          <div className="space-y-12">
            <div className="bg-neutral-950 p-8 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              
              <div className="relative z-10 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center shrink-0 border border-white/10">
                    <MapPin className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-2">Location</h3>
                    <p className="text-neutral-400 font-medium text-sm leading-relaxed">
                      Fitness Zone<br />
                      5HXG+X99, Sohela–Barpali Road,<br />
                      Near Fire Station,<br />
                      Barapali Town, Gopaipali,<br />
                      Odisha – 768029
                    </p>
                    <a href="https://maps.google.com/?q=5HXG+X99,+Sohela–Barpali+Road,+Near+Fire+Station,+Barapali+Town,+Gopaipali,+Odisha+–+768029" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-brand font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">
                      <Map className="w-4 h-4" /> Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center shrink-0 border border-white/10">
                    <Phone className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-2">Contact</h3>
                    <p className="text-neutral-400 font-medium text-sm flex flex-col gap-1">
                      <a href="tel:+917381127273" className="hover:text-brand transition-colors">Call: 073811 27273</a>
                      <a href="https://wa.me/917381127273" className="hover:text-brand transition-colors">WhatsApp: 073811 27273</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center shrink-0 border border-white/10">
                    <Clock className="w-5 h-5 text-brand" />
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-black uppercase tracking-tighter text-white">Hours</h3>
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${isOpen ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                        <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                        {isOpen ? 'Open Now' : 'Closed'}
                      </div>
                    </div>
                    <ul className="text-sm font-medium space-y-2">
                      <li className="flex justify-between items-center text-neutral-400 border-b border-white/5 pb-2">
                        <span>Mon - Sat</span>
                        <span className="text-right">4:00 AM – 9:00 AM<br/>4:00 PM – 9:00 PM</span>
                      </li>
                      <li className="flex justify-between items-center text-neutral-400 pt-1">
                        <span>Sunday</span>
                        <span className="text-brand">Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="h-64 bg-neutral-950 border border-white/10 p-2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14902.9781845173!2d83.5684497!3d21.1787201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2745cf8c40915d%3A0x633512a8af3c3a9a!2sFitness%20Zone!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(80%)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Fitness Zone Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-950 p-10 border border-white/10">
            <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-neutral-900 border border-white/10 text-white px-5 py-4 text-sm font-medium focus:outline-none focus:border-brand transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full bg-neutral-900 border border-white/10 text-white px-5 py-4 text-sm font-medium focus:outline-none focus:border-brand transition-colors"
                  placeholder="+91"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-neutral-900 border border-white/10 text-white px-5 py-4 text-sm font-medium focus:outline-none focus:border-brand transition-colors resize-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-brand text-black font-black uppercase tracking-widest py-5 text-sm hover:bg-brand-hover transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
