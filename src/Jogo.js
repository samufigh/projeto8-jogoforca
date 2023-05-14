import imagem from "./assets/forca0.png";

export default function Jogo( props ) {
    return (
        <div className="jogo">
            <img src={imagem}></img>
            <div className="palavra">
                <button
                onClick={props.escolherPalavra}
                >Escolher Palavra</button>
                <span>{props.palavra}</span>
            </div>
        </div>
    );
}