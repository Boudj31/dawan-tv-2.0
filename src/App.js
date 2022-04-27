import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from './views/About/About';
import Home from './views/Home/Home';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navigation />
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/about" element={<About />}/>
          <Route  path="*" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
