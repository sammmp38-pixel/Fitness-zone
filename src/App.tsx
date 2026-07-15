import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Profile from './pages/Profile';
import ContactButtons from './components/ContactButtons';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-950 text-white selection:bg-brand selection:text-neutral-950">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Booking />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
        <ContactButtons />
        <Chatbot />
      </div>
    </Router>
  );
}
