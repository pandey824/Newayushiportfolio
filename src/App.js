// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/home';
import About from './Components/About';
import Interest from './Components/Interests';
import Skills from './Components/Skills';
import Mywork from './Components/Mywork';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    <Navbar/>
     <Home/>
     <About/>
    <Interest/>
    <Skills/>
    <Mywork/>
    <Contact/>
    <Footer/>  
    </>
  );
}

export default App;

