import { Link } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";

export function Dinossauro() {

    useEffect(() => {
        // Adiciona a classe ao body ao montar o componente
        document.body.classList.add("body-background");
        // Remove a classe ao desmontar o componente
        return () => {
            document.body.classList.remove("body-background");
        };
    }, []);

    const [ovinhos, setovinhos] = useState([]);
    const [casquinha, setcasquinha] = useState([]);
    const [botaoF, setbotaoF] = useState([]);
    const [creatures, setcreatures] = useState([])

    useEffect(() => {
        // Requisição para o endpoint do banner
        fetch("http://localhost:3000/ovinhos")
            .then((response) => response.json())
            .then((data) => setovinhos(data))
            .catch((error) => console.error('Erro ao carregar o ovo:', error));

        console.log(ovinhos)

        fetch("http://localhost:3000/casquinha")
            .then((response) => response.json())
            .then((data) => setcasquinha(data))
            .catch((error) => console.error('Erro ao carregar a casquinha:', error));

        console.log(casquinha)

        fetch("http://localhost:3000/botaoF")
            .then((response) => response.json())
            .then((data) => setbotaoF(data))
            .catch((error) => console.error('Erro ao carregar o botao:', error));

        console.log(botaoF)


        fetch("http://localhost:3000/creatures")
            .then((response) => response.json())
            .then((data) => setcreatures(data))
            .catch((error) => console.error('Erro ao carregar a imagem creatures', error));

        console.log(creatures)

    }, []);



    return (
        <section>
            <div className="centroo">
                <div className="homee">
                    <Link to="/extincao" className="linkUm">
                        <div className="frasee">
                            <h1>Extinction</h1>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="frase">
                            <h1>Home</h1>
                        </div>
                    </Link>
                </div>

                <div className="legendaa">
                    <h1>Creatures</h1>
                </div>
                <div className="ovos">
                    <div className="ovo">
                        <div className="casca">
                            {ovinhos.map((info) => (
                                <div className="cascaimg" key={info.id}>
                                    <img src={info.url} alt="" />
                                </div>
                            ))}
                        </div>
                        <div className="dentro">
                            {creatures.map((info) => (
                                <div className="imgDentro" key={info.id}>
                                    <img src={info.url} alt="" />
                                </div>
                            ))}

                        </div>
                        <div className="casca2">
                            {casquinha.map((info) => (
                                <div className="cascaimg" key={info.id}>
                                    <img src={info.url} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="explic">
                        <div className="retang">
                            {creatures.map((info) => (
                                <div className="rexTexto" key={info.id}>
                                    <h1 className="trexT">{info.text}</h1>
                                    <p>{info.text2}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="ovo2">
                        <div className="casca">
                            {ovinhos.map((info) => (
                                <div className="cascaimg" key={info.id}>
                                    <img src={info.url} alt="" />
                                </div>
                            ))}
                        </div>
                        <div className="dentro">
                            {creatures.map((info) => (
                                <div className="imgDentro" key={info.id}>
                                    <img src={info.url2} alt="" />
                                </div>
                            ))}
                        </div>
                        <div className="casca2">
                            {casquinha.map((info) => (
                                <div className="cascaimg" key={info.id}>
                                    <img src={info.url} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="explic2">
                        <div className="retang">
                            {creatures.map((info) => (
                                <div className="rexTexto2" key={info.id}>
                                    <h1 className="trexT2">{info.text3}</h1>
                                    <p>{info.text4}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="fimm">
                    {botaoF.map((info) => (
                        <div className="botaoo" key={info.id}>
                            <div className="photoo">
                                <Link to="/aboutus">
                                    <img src={info.url} alt="" />
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

