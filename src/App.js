import './App.css';
import {Routes, Route} from 'react-router-dom';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
