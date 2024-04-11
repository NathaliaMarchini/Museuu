import { Link } from "react-router-dom";
import "./style.css";
export function AboutUs() {
    return (
        <section>
            <div className="centroAgain">
                <div className="quadrado">
                    <div className="quadradoC">
                        <div className="titulooo">
                            <h1>About Us</h1>
                        </div>
                        <div className="textoSobre">

                            <p>Bem-vindo ao Museu de Paleontologia!
                                Fundado em [ano de fundação], o Museu de Paleontologia nasceu da paixão por desvendar os mistérios do passado e compartilhar esse conhecimento com as gerações futuras. Desde então, temos nos dedicado a preservar e exibir uma rica coleção de fósseis e artefatos paleontológicos, fornecendo uma visão única da história da vida na Terra.
                                Nossa missão é dupla: além de sermos guardiões do passado, buscamos inspirar a curiosidade e o interesse pela ciência em todas as idades. Através de exposições interativas, programas educacionais e eventos especiais, convidamos nossos visitantes a explorar e compreender o fascinante mundo da paleontologia.
                                Curiosidades:
                                Nosso acervo inclui fósseis raros de dinossauros, mamíferos pré-históricos e plantas fossilizadas, oferecendo uma visão abrangente da vida ao longo dos tempos geológicos.
                                O destaque de nossa coleção é o esqueleto completo de um Tiranossauro Rex, descoberto em [local da descoberta].
                                Regularmente recebemos paleontologistas renomados para palestras e workshops, proporcionando aos nossos visitantes a oportunidade de interagir com especialistas no campo.
                                Políticas e Regras:
                                O Museu de Paleontologia é um espaço dedicado à aprendizagem e ao respeito mútuo. Pedimos a todos os visitantes que ajam com cortesia e consideração com outros visitantes e com o nosso patrimônio.
                                Fotografias são permitidas em muitas áreas do museu, mas flash e tripés são proibidos para proteger nossas exposições sensíveis.
                                Crianças devem estar acompanhadas por adultos em todos os momentos durante a visita ao museu.
                                Informações sobre a Empresa:
                                Localização: [Endereço do Museu]
                                Horário de Funcionamento: [Dias e Horários de Abertura]
                                Preços dos Ingressos: [Lista de Preços para Adultos, Crianças, Estudantes, etc.]
                                Contato: [Telefone, E-mail, Redes Sociais]
                                Esperamos que você se junte a nós nesta jornada através dos tempos geológicos e descubra o fascinante mundo da paleontologia no Museu de Paleontologia.</p>
                        </div>
                        <div className="back">
                            <Link to="/dino">
                                <h1>BACK</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}