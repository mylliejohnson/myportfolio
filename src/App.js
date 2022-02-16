import logo from './logo.svg';
import './styles/App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {

  return (
    <div className="App">
      <Header data-splitting />
      <Home />
      <Projects />
      <About data-splitting />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
