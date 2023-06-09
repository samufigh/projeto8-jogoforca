import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

export default function Jogo( props ) {
    const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

    return (
        <div className="jogo">
            <img 
            data-test="game-image"
            src={imagens[props.erros]}></img>
            <div className="palavra">
                <button
                data-test="choose-word"
                onClick={props.escolherPalavra}
                >Escolher Palavra</button>
                <span
                data-test="word"
                className={(props.fim)} 
                >{props.palavra}</span>
            </div>
        </div>
    );
}