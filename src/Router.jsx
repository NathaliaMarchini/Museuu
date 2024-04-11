import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Body } from "./Components/Body";
import { Home } from "./Page/Home";
import { Cadastro } from "./Page/cadastro";
import { Dinossauro } from "./Components/dinossauros";
import Extincao from "./Page/extincao";
import Historia from "./Components/Historia";
import About from "./Page/about";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dino" element={<Dino />} />
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/" element={<Dinossauro/>} />
                <Route path="/extincao" element={<Historia/>} />
                <Route path="/aboutus" element={<About/>} />
            </Routes>
            <Body />
        </BrowserRouter>
    );
}

export default App;
