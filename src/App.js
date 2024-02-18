import logo from './logo.svg';
import Header from './components/Header'
import Index from './components/Index'
import Sponser from './components/Sponser'
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Rotor from './components/Rotor';
import CustomerSupport from './components/CustomerSupport';
import Games from './components/Games';
import Carousel from "./components/Carousel";
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import Offers from './components/Offers';
import './App.css';
import Lottie from 'lottie-react';
import FreeID from './components/FreeID';
import Partners from './components/Partners';


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Index />
      {/* <Sponser /> */}
      <Partners />
      <Rotor />
      <Welcome />
      <Games />
      <Offers />
      <FreeID />
      <CustomerSupport />
      {/* <Carousel /> */}
      <Instagram />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
