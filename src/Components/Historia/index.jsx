import "./style.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Historia() {

    useEffect(() => {
        // Adiciona a classe ao body ao montar o componente
        document.body.classList.add("body-background");
        // Remove a classe ao desmontar o componente
        return () => {
            document.body.classList.remove("body-background");
        };
    }, []);

    useEffect(() => {
        // Requisição para o endpoint do banner
        fetch("http://localhost:3000/extincaoElements")
            .then((response) => response.json())
            .then((data) => setextincaoElements(data))
            .catch((error) => console.error('Erro ao carregar o ovo:', error));

        console.log(extincaoElements)

        fetch("http://localhost:3000/mouth")
            .then((response) => response.json())
            .then((data) => setmouth(data))
            .catch((error) => console.error('Erro ao carregar mouth:', error));

        console.log(mouth)
    }, []);




    const [extincaoElements, setextincaoElements] = useState([]);
    const [mouth, setmouth] = useState([]);

    return (
        <section>
            <div className="centroA">
                <div className="first">
                    <Link to="/dino" className="linkk">
                        <div className="lado">
                            <h1>Creatures</h1>
                        </div>
                    </Link>
                    <Link to="/" className="linkk2">
                        <div className="lado2">
                            <h1>Home</h1>
                        </div>
                    </Link>
                </div>
                <div className="legen">
                    <h1>A extinção dos dinossauros</h1>
                </div>
                <div className="iconPhoto">
                    {extincaoElements.map((info) => (
                        <div className="here" key={info.id}>
                            <img src={info.url} alt="" />
                        </div>
                    ))}
                </div>
                <div className="linha"></div>
                <div className="hist">
                    {extincaoElements.map((info) => (
                        <div className="historiaP" key={info.id}>
                            <p>{info.text}</p>
                        </div>
                    ))}
                </div>
                <div className="linhaF"></div>
                <div className="space">
                    <div className="F">
                        {mouth.map((info) => (
                            <div className="mouthPhoto" key={info.id}>
                                <img src={info.url} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="fimm2"></div>
            </div>
        </section>
    )
}

export default Historia;