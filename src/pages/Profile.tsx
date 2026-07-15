import { motion } from 'motion/react';
import { User, Mail, Phone, Calendar, Clock, Trophy, Settings, LogOut, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const userStats = {
  classesAttended: 42,
  currentStreak: 5,
  membershipTier: 'Elite',
  joinDate: 'March 2023'
};

const upcomingClasses = [
  { id: 1, name: 'CrossFit', date: 'Tomorrow', time: '06:00 AM', trainer: 'Mike Johnson' },
  { id: 2, name: 'Yoga Flow', date: 'Oct 15', time: '08:00 AM', trainer: 'Emma Thompson' }
];

export default function Profile() {
  return (
    <div className="min-h-[calc(100vh-80px)] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar / User Info */}
          <div className="w-full md:w-1/3 space-y-6">
            <div className="bg-neutral-900 border border-white/10 p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand"></div>
              <div className="w-24 h-24 bg-neutral-800 rounded-full mx-auto mb-6 flex items-center justify-center border border-white/20">
                <User className="w-10 h-10 text-neutral-400" />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-1">Alex Mercer</h2>
              <p className="text-brand text-xs font-bold uppercase tracking-widest mb-6">Elite Member</p>
              
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3 text-sm font-medium text-neutral-400">
                  <Mail className="w-4 h-4 text-brand" /> alex.m@example.com
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-neutral-400">
                  <Phone className="w-4 h-4 text-brand" /> +1 (555) 019-2837
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-neutral-400">
                  <Calendar className="w-4 h-4 text-brand" /> Joined {userStats.joinDate}
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-white/10 p-6 space-y-3">
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-colors text-white">
                <Settings className="w-4 h-4 text-neutral-400" /> Account Settings
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-colors text-red-400">
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-2/3 space-y-8">
            
            {/* Stats Overview */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-900 border border-white/10 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5 text-brand" />
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Classes Attended</span>
                </div>
                <div className="text-4xl font-black tracking-tighter">{userStats.classesAttended}</div>
              </div>
              <div className="bg-neutral-900 border border-white/10 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-brand" />
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Current Streak</span>
                </div>
                <div className="text-4xl font-black tracking-tighter flex items-end gap-2">
                  {userStats.currentStreak} <span className="text-lg text-neutral-500 font-medium pb-1">days</span>
                </div>
              </div>
            </div>

            {/* Upcoming Classes */}
            <div className="bg-neutral-900 border border-white/10 p-8">
              <div className="flex justify-between items-end mb-8">
                <h3 className="text-2xl font-black uppercase tracking-tighter">Upcoming Classes</h3>
                <Link to="/book" className="text-xs font-bold uppercase tracking-widest text-brand hover:text-white transition-colors">
                  Book New
                </Link>
              </div>

              {upcomingClasses.length > 0 ? (
                <div className="space-y-4">
                  {upcomingClasses.map((cls) => (
                    <div key={cls.id} className="bg-neutral-950 border border-white/10 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start sm:items-center gap-4">
                        <div className="w-12 h-12 bg-brand/10 border border-brand/30 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-6 h-6 text-brand" />
                        </div>
                        <div>
                          <h4 className="text-lg font-black uppercase tracking-tighter">{cls.name}</h4>
                          <div className="text-sm font-medium text-neutral-400 mt-1">with {cls.trainer}</div>
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-brand text-xs font-bold uppercase tracking-widest">{cls.date}</div>
                        <div className="text-white font-medium text-sm mt-1">{cls.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-neutral-500 font-medium mb-4">You have no upcoming classes scheduled.</p>
                  <Link to="/book" className="px-6 py-3 border border-brand text-brand font-bold uppercase tracking-widest text-xs hover:bg-brand hover:text-black transition-colors inline-block">
                    Book a Session
                  </Link>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
