import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/components/About">About</Link>
          </li>
          <li>
            <Link to="/components/Contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/About" element={<About />} />
        <Route path="/components/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;