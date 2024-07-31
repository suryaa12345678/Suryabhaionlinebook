
import Header from './components/Header'
import Index from './components/Index'
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Rotor from './components/Rotor';
import CustomerSupport from './components/CustomerSupport';
import Games from './components/Games';
import Carousel from "./components/Carousel";
import InstagramContent from './components/InstagramContent';
import Contact from './components/Contact';
import Offers from './components/Offers';
import './App.css';
import Lottie from 'lottie-react';
import FreeID from './components/FreeID';
import Partners from './components/Partners';
import { number1 } from './numbers';


function App() {
  return (
    <>
      <div className="App">
        {/* <Header /> */}
        <Index />
        <Partners />
        <Rotor />
        <Welcome />
        <Games />
        <Offers />
        <FreeID />
        <CustomerSupport />
        {/* <Carousel /> */}
        <InstagramContent />
        <Contact />
        {/* <Footer /> */}
      </div>


      <div className="whatsapp_float">
        <a href={`https://wa.me/91${number1}`} target="_blank" rel="noreferrer">
          <img src={"./whatsapp.webp"} alt="WhatsApp Logo" width="60px" />
        </a>
      </div>
    </>
  );
}

export default App;
