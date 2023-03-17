import './App.css';
import './css/styles.css';
import Header from './components/header';
import HomeSection from './components/homeSection';
import About from './components/aboutSection';
import Features from './components/featuresSection';
// import ChooseUs from './components/chooseUs';
import ClassSection from './components/classSection';
import FaqSection from './components/faqSection';
import ContactSection from './components/contactSection';
import Footer from './components/footer';


function App() {
  return (
    <div>
      <Header />
      <HomeSection />
      <About />
      <Features />
      {/* <ChooseUs/> */}
      <ClassSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
