import { motion } from 'motion/react';
import { Star, Quote, ExternalLink } from 'lucide-react';

const testimonials = [
  {
    name: 'Google Reviewer',
    role: 'Local Guide',
    content: 'I used to go there and the surrounding environment is quite good with good lighting and fans. Great place for workouts.',
    rating: 5
  },
  {
    name: 'Google Reviewer',
    role: 'Customer',
    content: 'Nice experience. Accessories are really good.',
    rating: 5
  },
  {
    name: 'Google Reviewer',
    role: 'Customer',
    content: 'Only sad thing about the place is lack of guidance.',
    rating: 4
  },
  {
    name: 'Google Reviewer',
    role: 'Customer',
    content: 'Excellent place for fitness training. Highly recommended.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-neutral-900 relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] md:text-[180px] font-black text-white/5 leading-none select-none pointer-events-none tracking-tighter w-full">REVIEWS</div>
          <div className="relative z-10">
            <span className="text-brand font-bold tracking-widest uppercase mb-4 block text-sm">Google Reviews</span>
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
              Real Results
            </h2>
            <div className="flex flex-col items-center justify-center gap-2 mb-6">
              <div className="flex items-center gap-2 text-2xl font-black text-white">
                <span className="text-brand">4.6/5</span> Rating
              </div>
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-brand text-brand" />
                ))}
                <div className="relative">
                  <Star className="w-6 h-6 text-brand" />
                  <div className="absolute inset-0 overflow-hidden w-[60%]">
                    <Star className="w-6 h-6 fill-brand text-brand" />
                  </div>
                </div>
              </div>
              <p className="text-neutral-400 font-medium mt-2">Based on 44+ Google Reviews</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-neutral-950 p-10 border border-white/10 relative group hover:border-brand/30 transition-colors flex flex-col h-full"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-brand/10 transition-colors" />
              <div className="flex gap-1 mb-8 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={i < t.rating ? "w-5 h-5 fill-brand text-brand" : "w-5 h-5 text-neutral-700"} />
                ))}
              </div>
              <p className="text-neutral-300 font-medium mb-10 leading-relaxed relative z-10 flex-grow">
                "{t.content}"
              </p>
              <div className="relative z-10 border-t border-white/10 pt-6">
                <div className="font-black text-white uppercase tracking-tighter text-xl">{t.name}</div>
                <div className="text-brand text-xs font-bold uppercase tracking-widest mt-2">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center relative z-10">
          <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-brand text-brand font-black uppercase tracking-widest text-sm hover:bg-brand hover:text-black transition-colors">
            View All Reviews
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
