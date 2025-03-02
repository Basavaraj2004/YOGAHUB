import './Dashboard.css';
import Header from './components/Header/Header';
import "./assets/js/script";
import Services from './components/Services/Services';
// import About from './components/About/About';
import Qualities from './components/Qualities/Qualities';
import Features from './components/Features/Features';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import VoiceBot from './VoiceBot';
import AiAssistant from '../AI/AiAssistant';

function Dashboard() {
  return (
    <div className="App">
            <Header />
            <Navbar />
            <Services />
            {/* <About /> */}
            <Qualities />
            <Features />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
            {/* <VoiceBot/> */}
            <AiAssistant/>
    </div>
  );
}

export default Dashboard;
