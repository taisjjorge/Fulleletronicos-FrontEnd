import './Intro.css';


export default function Intro() {
    
    return(
        <section className="sobre">
            <h2>Uma mistura de</h2>
            <div className="sobre-container">
                <div className="sobre-item">
                    <img src={"https://www.apertestart.com.br/wp-content/uploads/2015/11/jogo-cobrinha.jpg"}/>
                    <h3>diversão</h3>
                </div>
                <div className="sobre-item">
                    <img src={"https://www.mobilegamer.com.br/wp-content/uploads/2014/10/stack-attack-siemens.jpg"}/>
                    <h3>nostalgia</h3>
                </div>
            </div>
            <p>A FullStack Eletro é uma combinação de nostalgia com muita diversão. Aqui você encontra
                os celulares mais desejados dos anos 90's e 2000. 
                </p>
        </section>
    )
}

        