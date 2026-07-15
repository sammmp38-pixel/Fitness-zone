import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    description: 'Perfect for beginners looking to get started.',
    features: [
      'Access to gym floor',
      'Basic equipment usage',
      'Locker room access',
      'Free WiFi',
      '1 Intro session'
    ],
    popular: false
  },
  {
    name: 'Pro',
    description: 'Everything you need for a serious workout.',
    features: [
      'Unlimited gym access',
      'All group classes included',
      'Advanced equipment access',
      'Guest pass (2/month)',
      '1 Personal training session/mo'
    ],
    popular: true
  },
  {
    name: 'Elite',
    description: 'The ultimate fitness experience and coaching.',
    features: [
      '24/7 Priority access',
      'Unlimited classes & workshops',
      'Weekly personal training',
      'Nutrition consultation',
      'Recovery zone access'
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-neutral-950 relative" id="pricing">
      {/* Decorative background text */}
      <div className="absolute top-40 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none flex">
        <span className="text-[280px] font-black uppercase whitespace-nowrap leading-none tracking-tighter">JOIN THE ZONE JOIN THE ZONE</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand font-bold tracking-widest uppercase mb-4 block text-sm">Membership</span>
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Choose Your Plan
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative bg-neutral-900 p-10 flex flex-col ${
                plan.popular 
                  ? 'border border-brand lg:scale-105 z-10' 
                  : 'border border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-black px-4 py-1.5 font-bold uppercase tracking-widest text-xs shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-3">
                {plan.name}
              </h3>
              <p className="text-neutral-400 text-sm mb-8 min-h-[40px] leading-relaxed font-medium">{plan.description}</p>
              
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-neutral-300 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 font-black uppercase tracking-widest transition-colors text-sm ${
                plan.popular 
                  ? 'bg-brand text-black hover:bg-brand-hover' 
                  : 'bg-transparent border border-white/20 text-white hover:bg-white/5'
              }`}>
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
