import { MessageCircle, Phone } from 'lucide-react';

export default function ContactButtons() {
  const phoneNumber = '+917381127273';
  const whatsappNumber = '+917381127273';
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in joining Fitness Zone.");

  return (
    <>
      {/* Floating WhatsApp Button (All pages) */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[90px] md:bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-neutral-900 text-white text-xs font-bold px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 uppercase tracking-widest">
          Chat with us
        </span>
      </a>

      {/* Sticky Call Now Button (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-neutral-950 border-t border-white/10 p-4 pb-safe flex gap-4">
        <a
          href={`tel:${phoneNumber}`}
          className="flex-1 bg-brand text-black py-3 rounded-md font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2"
        >
          <Phone className="w-5 h-5 fill-black" />
          Call Now
        </a>
      </div>
      
      {/* Add padding to body for mobile to prevent content from hiding behind the sticky bottom bar */}
      <style>{`
        @media (max-width: 768px) {
          body {
            padding-bottom: 80px;
          }
        }
      `}</style>
    </>
  );
}
