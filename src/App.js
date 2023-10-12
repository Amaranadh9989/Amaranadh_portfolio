import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import MainPage from './components/MainPage';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Contact/>
       <Header/>
       <MainPage/>
       <About/>
       <Experience/>
       <Project/>
       <ContactForm/>
       <Footer/>
    </div>
  );
}
export default App;
