import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
// import TeamPage from './pages/TeamPage';
// import ContactPage from './pages/ContactPage';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => setIsNavOpen(!isNavOpen);

    return (
        <Router>
            <Navbar isNavOpen={isNavOpen} toggleNav={toggleNav} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                {/*<Route path="/team" element={<TeamPage />} />*/}
                {/*<Route path="/sponsors" element={<SponsorsPage />} />*/}
                {/*<Route path="/contact" element={<ContactPage />} />*/}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;