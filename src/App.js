import './App.css';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Projects />
      <AboutMe />
    </div>
  );
}

export default App;
