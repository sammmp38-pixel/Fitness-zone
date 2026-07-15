import { motion } from 'motion/react';
import { Dumbbell, Users, HeartPulse, Trophy, Activity, Scale, UserCheck, Flame, Sparkles, Droplet, Shirt, Car, Wallet } from 'lucide-react';

const features = [
  { icon: Users, title: 'Professional Trainers', description: 'Expert guidance to help you reach your specific fitness goals.' },
  { icon: Dumbbell, title: 'Modern Equipment', description: 'State-of-the-art machines and free weights for all muscle groups.' },
  { icon: Trophy, title: 'Strength Training', description: 'Dedicated zones and equipment for powerlifting and bodybuilding.' },
  { icon: HeartPulse, title: 'Cardio Zone', description: 'Wide range of treadmills, ellipticals, and bikes for cardiovascular health.' },
  { icon: Activity, title: 'Muscle Building', description: 'Targeted workout plans designed for effective muscle hypertrophy.' },
  { icon: Scale, title: 'Weight Loss Programs', description: 'Customized routines and diet advice to shed unwanted fat.' },
  { icon: UserCheck, title: 'Personal Training', description: 'One-on-one coaching sessions tailored to your individual needs.' },
  { icon: Flame, title: 'Functional Training', description: 'Dynamic exercises to improve daily movement and overall strength.' },
  { icon: Sparkles, title: 'Clean & Hygienic', description: 'Rigorously sanitized environment ensuring maximum health safety.' },
  { icon: Droplet, title: 'Drinking Water', description: 'Purified drinking water available at all times to keep you hydrated.' },
  { icon: Shirt, title: 'Changing Room', description: 'Spacious, clean, and secure changing facilities for your convenience.' },
  { icon: Car, title: 'Parking Facility', description: 'Ample and safe parking space available for all our members.' },
  { icon: Wallet, title: 'Affordable Plans', description: 'Flexible and cost-effective membership packages to suit every budget.' }
];

export default function Features() {
  return (
    <section className="py-24 bg-neutral-950 relative" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] md:text-[200px] font-black text-white/5 leading-none select-none pointer-events-none tracking-tighter">FEATURES</div>
          <div className="relative z-10">
            <span className="text-brand font-bold tracking-widest uppercase mb-4 block text-sm">Premium Amenities</span>
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Push Your Limits
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
              className="bg-neutral-900 border border-white/10 p-8 hover:border-brand transition-colors group relative overflow-hidden flex flex-col h-full"
            >
              {/* Background accent on hover */}
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 transition-opacity duration-500 scale-150 transform -translate-y-1/4 translate-x-1/4">
                <feature.icon className="w-full h-full text-brand" />
              </div>

              <div className="h-16 w-16 bg-neutral-950 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-brand group-hover:border-brand transition-all relative z-10 shrink-0">
                <feature.icon className="h-8 w-8 text-brand group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-4 relative z-10">
                {feature.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed text-sm relative z-10 font-medium flex-grow">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
