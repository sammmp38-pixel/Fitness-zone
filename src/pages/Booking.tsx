import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, User, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const availableClasses = [
  { id: 1, name: 'CrossFit', time: '06:00 AM', trainer: 'Mike Johnson', slots: 5 },
  { id: 2, name: 'Yoga Flow', time: '08:00 AM', trainer: 'Emma Thompson', slots: 12 },
  { id: 3, name: 'Powerlifting', time: '05:00 PM', trainer: 'David Wilson', slots: 3 },
  { id: 4, name: 'Boxing', time: '07:00 PM', trainer: 'Sarah Davis', slots: 8 },
];

export default function Booking() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedClass && selectedDate) {
      setIsBooked(true);
      // In a real app, this would make an API call
    }
  };

  if (isBooked) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-neutral-900 border border-white/10 p-10 max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-brand" />
          </div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Session Booked!</h2>
          <p className="text-neutral-400 font-medium mb-8">
            Your spot has been secured. We've sent the details to your email. See you at the gym!
          </p>
          <div className="flex flex-col gap-4">
            <Link to="/profile" className="w-full px-6 py-4 bg-brand text-black font-black uppercase tracking-widest text-sm hover:bg-brand-hover transition-colors">
              View Profile
            </Link>
            <Link to="/" className="w-full px-6 py-4 border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-white/5 transition-colors">
              Return Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <span className="text-brand font-bold tracking-widest uppercase mb-4 block text-sm">Schedule</span>
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Book a Class
          </h1>
        </div>

        <form onSubmit={handleBooking} className="space-y-8">
          <div className="bg-neutral-900 border border-white/10 p-8">
            <h3 className="text-xl font-black uppercase tracking-tighter mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-brand" /> Select Date
            </h3>
            <input 
              type="date" 
              required
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full bg-neutral-950 border border-white/10 text-white px-5 py-4 focus:outline-none focus:border-brand transition-colors font-medium text-sm"
            />
          </div>

          <div className="bg-neutral-900 border border-white/10 p-8">
            <h3 className="text-xl font-black uppercase tracking-tighter mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand" /> Available Sessions
            </h3>
            <div className="grid gap-4">
              {availableClasses.map((cls) => (
                <label 
                  key={cls.id} 
                  className={`flex items-center justify-between p-5 border cursor-pointer transition-colors ${
                    selectedClass === cls.id 
                      ? 'border-brand bg-brand/5' 
                      : 'border-white/10 hover:border-white/30 bg-neutral-950'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <input 
                      type="radio" 
                      name="classSelection" 
                      value={cls.id}
                      checked={selectedClass === cls.id}
                      onChange={() => setSelectedClass(cls.id)}
                      className="w-4 h-4 accent-brand"
                      required
                    />
                    <div>
                      <div className="font-black uppercase tracking-tighter text-lg">{cls.name}</div>
                      <div className="text-xs font-bold tracking-widest text-brand uppercase mt-1">{cls.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-neutral-400">{cls.trainer}</div>
                    <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase mt-1">
                      {cls.slots} slots left
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <button 
            type="submit"
            disabled={!selectedClass || !selectedDate}
            className="w-full px-8 py-5 bg-brand text-black font-black uppercase tracking-widest text-sm hover:bg-brand-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
          >
            Confirm Booking
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
}
