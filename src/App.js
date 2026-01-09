import Header from './components/Header';
import './App.css';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ContactCTA from './components/ContactCTA';


function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Portfolio />
      <ContactCTA/>
      <Footer />
    </div>
  );
}

export default App;
