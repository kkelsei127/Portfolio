// import logo from './logo.svg';
import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import PortfolioContainer from "./components/PortfolioContainer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About.js'
import Homepage from './components/pages/Homepage';
import Works from './components/pages/Works';
import Contact from './components/pages/Contact';


function App() {
  return (
    <Router>
      <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Works" element={<Works/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      {/* <PortfolioContainer/> */}
      <Footer/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </div>

    </Router>
    
    
  );
}

export default App;
