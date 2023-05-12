import imagem from "./assets/forca0.png";

export default function Jogo() {
    return (
        <div className="jogo">
            <img src={imagem}></img>
            <div className="palavra">
                <button>Escolher Palavra</button>
                <span>Palavra</span>
            </div>
        </div>
    );
}