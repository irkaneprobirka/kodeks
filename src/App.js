import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import { Layout } from './components/HOC/Layout';
import MainBanner from './components/MainBanner';
import PricingCards from './components/PricingCards';

function App() {
  return (
    <div className="App">
      <Layout />
      <MainBanner/>
      <Carousel/>
      <PricingCards />
      <Footer/>
    </div>
  );
}

export default App;
