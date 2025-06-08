import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import TeamPage from './TeamPage';
import Robots from "./Robots.tsx";
import TermsOfService from './Terms.tsx';
import Gallery from './Gallery.tsx';
import PrivacyPolicy from './Privacy.tsx';
import Resources from "./Recources.tsx";
import Navbar from './Navbar';
import SponsorUs from './SponsorUs.tsx';
import Footer from './Footer';
import LoginPage from './LoginPage.tsx';
import Dashboard from './Dashboard';
import QuestionnairePage from "./QuestionnairePage.tsx";
import LeaderboardPage from "./LeaderboardPage.tsx";
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
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/robots" element={<Robots />} />
                <Route path="/sponsors-us" element={<SponsorUs />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/community-points" element={<QuestionnairePage />} />
                <Route path="/leaderboard" element={<LeaderboardPage />} />
                {/*<Route path="/contact" element={<ContactPage />} />*/}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;