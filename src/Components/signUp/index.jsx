import "./style.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export function SignUp() {


    const initilform = {
        email: "",
        senha: ""
    };

    const [cadastroText, setcadastroText] = useState([]);
    const [formState, setformState] = useState(initilform);
    const [emailExists, setemailExists] = useState(false);
    const [redirect, setRedirect] = useState(false);


    useEffect(() => {
        document.body.classList.add("signup-body");
        return () => {
            document.body.classList.remove("signup-body");
        };
    }, []);


    useEffect(() => {
        fetch("http://localhost:3000/cadastroText")
            .then((response) => response.json())
            .then((data) => {
                setcadastroText(data);
                const existingUser = data.find (user => user.email === formState.email);
                setemailExists(existingUser ? true : false);
            })
            .catch((error) => console.error('Erro ao carregar o texto:', error));
    }, []);




    //função para lidar com a alteração de cvampos de entrada
    const handleInput = (event) => {
        //obter o elemento da entrada atual
        const target = event.currentTarget;

        // Extrair o valor e o nome do campo de entrada
        const { value, name } = target;

        //atualizar o estado do formulário com os novos valores
        setformState({ ...formState, [name]: value });
    }

    const exemploTarget = (event) => {
        console.log("Elemento clicado: ", event.target);// esse pega apenas um elemento, que éo que foi clicado
        console.log("Elemento Atual: ", event.currentTarget);// esse pega o conjunto de elementos
    }

    // Função para lidar com a submissão 
    const handleSubmit = (event) => {
        event.preventDefault();


        // verificar se o email está vazio
        if (!formState.email) {
            alert("Por favor, insira um email.");
            return;
        }

        if (!formState.senha) {
            alert("Por favor, insira uma senha.");
            return;
        }

        if(emailExists){
            alert("Esse email já está cadastrado!");
            return;
        }


        const formGeneral = {
            email: formState.email,
            senha: formState.senha
        }

        const requestOptions = {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formGeneral),
        }

        fetch('http://localhost:3000/teste', requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setformState(data);

                // Limpar os campos do formulário após o cadastro ser realizado
                setformState({ ...initilform });

                alert("Cadastro realizado com sucesso!");
            })
            .catch((error) => {
                console.error('Erro ao cadastrar:', error);
                // Tratar o erro, se necessário
        });

    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div className="centro">
                    <section className="espaco">
                        <div className="volta">
                            <Link to="/">
                            <h1>Voltar</h1>
                            </Link>
                            
                        </div>
                    </section>
                    <section className="conteudoT">
                        <div className="textinho">
                            {cadastroText.map((info) => (
                                <div className="arr" key={info.id}>
                                    <h1>{info.text}</h1>
                                </div>
                            ))}
                        </div>
                        <div className="conteuform">
                            <div className="arr2">
                                <div className="input1">
                                    <label className="labelE" htmlFor="email">Email:</label>
                                    <input className="inputEmail"
                                        type="text"
                                        name="email"
                                        id="email"
                                        value={formState.email}
                                        onChange={handleInput}
                                        placeholder="Digite seu email"
                                    />
                                </div>
                                <div className="input2">
                                    <label className="labelS" htmlFor="senha">Senha:</label>
                                    <input className="inputSenha"
                                        type="text"
                                        name="senha"
                                        id="senha"
                                        value={formState.senha}
                                        onChange={handleInput}
                                        placeholder="Digite sua senha"
                                    />
                                </div>
                            </div>
                            <div className="botaozinho">
                                <button type="submit">Cadastrar</button>
                            </div>
                        </div>
                    </section>
                    <section className="terra">
                        {cadastroText.map((info) => (
                            <div className="terraimg" key={info.id}>
                                <img src={info.url} alt="" />
                            </div>
                        ))}
                    </section>
                </div>

            </form>

        </section>
    )
}