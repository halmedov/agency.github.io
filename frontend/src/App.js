import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutUsSection from './components/About';
import ChatBot from './components/Chat';
import ContactSection from './components/Contact';
import CtaSection from './components/Cta';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import SkillsSection from './components/Skills';
import WhyUsSection from './components/WhyUs'

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <AboutUsSection/>
      <WhyUsSection />
      <SkillsSection/>
      <Services/>
      <CtaSection/>
      <ContactSection/>
      <Footer/>
      
    </>
      
  );
}



export default App;
