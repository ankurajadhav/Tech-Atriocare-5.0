import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Innovation from './pages/Innovation';
import Dashboard from './pages/Dashboard';
import Team from './pages/Team';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import HaalChaal from './pages/HaalChaal';
import HaalChaalPravartak from './pages/HaalChaalPravartak';
import VSync from './pages/VSync';
import AirwayCheckup from './pages/AirwayCheckup';
import Terms from './pages/Terms';
import Reviews from './pages/Reviews';
import ChallengeTerms from './pages/ChallengeTerms';
import AIHealthAssistant from './components/AIHealthAssistant';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* VSync is wrapped under Layout to show the consistent header/navbar */}
        <Route element={<Layout><VSync /></Layout>} path="/vsync" />
        
        {/* Other pages use the standard Layout with sidebar/navbar */}
        <Route element={<Layout><Home /></Layout>} path="/" />
        <Route element={<Layout><Innovation /></Layout>} path="/innovation" />
        <Route element={<Layout><Dashboard /></Layout>} path="/dashboard" />
        <Route element={<Layout><Team /></Layout>} path="/team" />
        <Route element={<Layout><Blogs /></Layout>} path="/blogs" />
        <Route element={<Layout><BlogDetail /></Layout>} path="/blogs/:id" />
        <Route element={<Layout><HaalChaal /></Layout>} path="/haal-chaal" />
        <Route element={<Layout><HaalChaalPravartak /></Layout>} path="/haal-chaal-pravartak" />
        <Route element={<Layout><AirwayCheckup /></Layout>} path="/checkup" />
        <Route element={<Layout><Terms /></Layout>} path="/terms" />
        <Route element={<Layout><ChallengeTerms /></Layout>} path="/challenge-terms" />
        <Route element={<Layout><Reviews /></Layout>} path="/reviews" />
      </Routes>
      <AIHealthAssistant />
    </Router>
  );
}



