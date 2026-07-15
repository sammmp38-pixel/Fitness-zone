import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym interior"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand font-bold tracking-widest uppercase mb-4 block text-sm sm:text-base border-l-2 border-brand pl-4">
              Build Your Body, Build Your Character
            </span>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white uppercase leading-[0.85] tracking-tighter mb-6">
              Unleash <br />
              Your <span className="text-brand">Beast</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-400 mb-10 max-w-xl font-medium leading-relaxed">
              Premium equipment, elite trainers, and a community that pushes you to be your absolute best. Stop making excuses and start making progress.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book" className="bg-brand text-black px-10 py-5 font-black uppercase tracking-widest hover:bg-brand-hover transition-all flex items-center justify-center gap-2 group text-sm inline-block text-center">
                Book a Class
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#classes" className="bg-transparent border border-white/20 text-white px-10 py-5 font-black uppercase tracking-widest hover:bg-white/5 transition-all text-sm text-center">
                View Classes
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 pt-8"
          >
            <div>
              <div className="text-4xl md:text-5xl font-black text-white mb-1 tracking-tighter">50+</div>
              <div className="text-neutral-500 uppercase tracking-widest text-[10px] md:text-xs font-bold">Expert Trainers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white mb-1 tracking-tighter">10k+</div>
              <div className="text-neutral-500 uppercase tracking-widest text-[10px] md:text-xs font-bold">Members Active</div>
            </div>
            <div className="col-span-2 md:col-span-1 border-t md:border-t-0 border-white/10 pt-8 md:pt-0">
              <div className="text-4xl md:text-5xl font-black text-white mb-1 tracking-tighter">100+</div>
              <div className="text-neutral-500 uppercase tracking-widest text-[10px] md:text-xs font-bold">Weekly Classes</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
