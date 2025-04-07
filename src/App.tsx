import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import TeamPage from './TeamPage';
import Robots from "./Robots.tsx";
import TermsOfService from './Terms.tsx';
import Gallery from './Gallery.tsx';
import PrivacyPolicy from './Privacy.tsx';
import Resources from "./Recources.tsx";
import LearnJewish from "./LearnJewish.tsx";
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
                <Route path="/team" element={<TeamPage />} />
                <Route path="/robots" element={<Robots />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/learn" element={<LearnJewish />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/robots" element={<Robots />} />
                {/*<Route path="/sponsors" element={<SponsorsPage />} />*/}
                {/*<Route path="/contact" element={<ContactPage />} />*/}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;