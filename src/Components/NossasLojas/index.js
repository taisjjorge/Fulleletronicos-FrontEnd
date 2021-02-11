import './NossasLojas.css';

function NossasLojas() {
    return (
        <div className="locais">
            <h2>Nossas lojas</h2>
            <hr/>
            <div className="locais-item">
                <img src={"https://travel-guide.daytours4u.com/pt/wp-content/uploads/sites/4/2020/07/Lapa-Rio-de-Janeiro-Arches.png"} alt="Unidade Botafogo" />
                <div>
                    <h2>Lapa</h2>
                    <p>Temos uma unidade instalada no coração carioca, confira nossa loja situada na região</p>
                    <a href="#">Ver mapa</a>
                </div>
            </div>

            <div className="locais-item">
                <img src={"https://www.melhoresdestinos.com.br/wp-content/uploads/2020/07/avenida-paulista-turismo-820x547.jpg"} alt="Unidade Av. Paulista" />
                <div>
                    <h2>Av. Paulista</h2>
                    <p>Você também pode encontrar uma FullStack Eletrônicos na selva de pedra</p>
                    <a href="#">Ver mapa</a>
                </div>
            </div>

            <div className="locais-item">
                <img src={"https://1.bp.blogspot.com/-pvuj06pnscQ/Wq6WWnUXJyI/AAAAAAAAn34/i1SEWfohzsMt6j12EnN7tgc8URCSX4I3wCLcBGAs/s1600/20180306_120713%2B-%2BCopia.jpg"} alt="Unidade Ipiranga" />
                <div>
                    <h2>Tiradentes</h2>
                    <p>Aproveite para conhecer nossa instalação em Minas Gerais, Tiradentes.</p>
                    <a href="#">Ver mapa</a>
                </div>
            </div>
               
            
        </div>
)}

export default NossasLojas;


