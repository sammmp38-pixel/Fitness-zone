import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const trainers = [
  {
    name: 'Mike Johnson',
    expertise: 'CrossFit & Hiit',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Sarah Davis',
    expertise: 'Boxing & Cardio',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'David Wilson',
    expertise: 'Powerlifting',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Emma Thompson',
    expertise: 'Yoga & Mobility',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop',
  }
];

export default function Trainers() {
  return (
    <section className="py-24 bg-neutral-950 border-t border-white/10" id="trainers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] md:text-[180px] font-black text-white/5 leading-none select-none pointer-events-none tracking-tighter w-full">EXPERT</div>
          <div className="relative z-10">
            <span className="text-brand font-bold tracking-widest uppercase mb-4 block text-sm">Our Team</span>
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Professional Trainers
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden aspect-[3/4] bg-neutral-900 border border-white/10 hover:border-brand/50 transition-colors grayscale hover:grayscale-0"
            >
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">{trainer.name}</h3>
                <p className="text-brand text-xs font-bold tracking-widest uppercase mb-4">{trainer.expertise}</p>
                
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a href="#" className="text-neutral-400 hover:text-brand transition-colors"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="text-neutral-400 hover:text-brand transition-colors"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="text-neutral-400 hover:text-brand transition-colors"><Facebook className="w-5 h-5" /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
