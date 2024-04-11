import { Link } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";

export function Body() {


    useEffect(() => {
        // Adiciona a classe ao body ao montar o componente
        document.body.classList.add("body-background");
        // Remove a classe ao desmontar o componente
        return () => {
            document.body.classList.remove("body-background");
        };
    }, []);
    const [fossilRex, setInfoBanner] = useState([]);
    const [conteudinho, setconteudinho] = useState([]);
    const [botaoF, setbotaoF] = useState([]);

    useEffect(() => {
        // Requisição para o endpoint do banner
        fetch("http://localhost:3000/fossilRex")
            .then((response) => response.json())
            .then((data) => setInfoBanner(data))
            .catch((error) => console.error('Erro ao carregar o fossil:', error));

        console.log(fossilRex)


        fetch("http://localhost:3000/conteudinho")
            .then((response) => response.json())
            .then((data) => setconteudinho(data))
            .catch((error) => console.error('Erro ao carregar o conteudinho:', error));

        console.log(conteudinho)


        fetch("http://localhost:3000/botaoF")
            .then((response) => response.json())
            .then((data) => setbotaoF(data))
            .catch((error) => console.error('Erro ao carregar o conteudinho:', error));

        console.log(botaoF)
    }, []);

    return (
        <section >
            <div className="Centro">
                <div className="word">
                    <Link to="/cadastro">
                        <p className="Sign">Sing Up</p>
                    </Link>
                </div>

                <div className="secaoT">
                    <div className="titulo">
                        <h1>Museum Of Paleontology</h1>
                    </div>
                </div>

                <section className="Paty2">
                    <div className="Roi1">
                        <section className="row">
                            {fossilRex.map((info) => (
                                <div className="foto" key={info.id}>
                                    <img src={info.url} alt="" />
                                </div>
                            ))}
                        </section>
                    </div>
                    <div className="Roi2">
                        <section className="row2">
                            <div className="cont">
                                {conteudinho.map((info) => (
                                    <div className="welc" key={info.id}>
                                        <h1>{info.text}</h1>
                                    </div>
                                ))}
                                {conteudinho.map((info) => (
                                    <div className="parag" key={info.id}>
                                        <p>{info.text2}</p>
                                    </div>
                                ))}

                                {conteudinho.map((info) => (
                                    <div className="comeOn" key={info.id}>
                                        <h2>{info.text3}</h2>
                                    </div>
                                ))}


                            </div>
                        </section>
                    </div>
                </section>


                <section className="Paty3">
                    <div className="foot1">
                        <div className="pe"></div>
                        <div className="meio"></div>
                        <div className="pe2"></div>
                    </div>
                    <div className="foot2">
                        <div className="pe3"></div>
                        <div className="meio2"></div>
                        <div className="pe4"></div>
                    </div>
                </section>
                <div className="fim">

                    {botaoF.map((info) => (
                        <div className="divBotao" key={info.id}>
                            <div className="photo">
                                <Link to="/dino">
                                    <img src={info.url} alt="" />
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
}
