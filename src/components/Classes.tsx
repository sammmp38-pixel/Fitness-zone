import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const classes = [
  {
    name: 'CrossFit',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop',
    time: 'Mon, Wed, Fri • 6:00 AM',
    trainer: 'Mike Johnson'
  },
  {
    name: 'Boxing',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1974&auto=format&fit=crop',
    time: 'Tue, Thu • 7:00 PM',
    trainer: 'Sarah Davis'
  },
  {
    name: 'Powerlifting',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    time: 'Mon, Wed, Fri • 5:00 PM',
    trainer: 'David Wilson'
  },
  {
    name: 'Yoga Flow',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop',
    time: 'Tue, Thu, Sat • 8:00 AM',
    trainer: 'Emma Thompson'
  }
];

export default function Classes() {
  return (
    <section className="py-24 bg-neutral-900 border-y border-white/10" id="classes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 relative">
          <div className="relative z-10">
            <span className="text-brand font-bold tracking-widest uppercase mb-4 block text-sm">Our Programs</span>
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Featured Classes
            </h2>
          </div>
          <button className="text-brand flex items-center gap-2 font-black uppercase text-sm tracking-widest hover:text-white transition-colors pb-2 relative z-10">
            View Full Schedule <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden aspect-[4/5] bg-neutral-950 border border-white/10 hover:border-brand/50 transition-colors grayscale hover:grayscale-0"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-3xl font-black text-white uppercase mb-3 tracking-tighter">{item.name}</h3>
                <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <p className="text-brand text-xs font-bold tracking-widest uppercase">{item.time}</p>
                  <p className="text-neutral-400 text-sm font-medium">Trainer: <span className="text-white">{item.trainer}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
