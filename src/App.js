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
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Index />
      <Sponser />
      <Welcome />
      <Rotor />
      <CustomerSupport />
      <Games />
      <Carousel />
      <Instagram />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
