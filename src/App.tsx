import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Home } from './pages/Home';
import { Teams } from './pages/Teams';
import { Tournaments } from './pages/Tournaments';
import { Sessions } from './pages/Sessions';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Gallery } from './pages/Gallery';
import { Stats } from './pages/Stats';
import { Sponsors } from './pages/Sponsors';
import { News } from './pages/News';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-premium relative">
        <AnnouncementBar />
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/news" element={<News />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}
