import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Renomeei para BrowserRouter e importei Routes
import './App.css';
/* import { Body } from './Components/Body';*/
import { Home } from './Page/Home';
import Dino from './Page/dino';
import Cadastro from './Page/cadastro';
import { Dinossauro } from './Components/dinossauros';
import Extincao from './Page/extincao';
import About from './Page/about';




function App() {
  return (
    <Router> {/* Coloque suas rotas dentro do Router */}
      <Routes> {/* Use Routes para envolver suas rotas */}
        <Route path="/" element={<Home />} /> {/* Defina suas rotas */}
        <Route path="/dino" element={<Dino />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={<Dinossauro />} />
        <Route path="/extincao" element={<Extincao/>} />
        <Route path="/dino" element={<Extincao/>} />
        <Route path="/aboutus" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
