

export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <div className="Letras" >
            <div className="alfabeto ">
                {alfabeto.map((letra, indice) => (
                    <button
                        data-test="letter"
                        className={(props.disabled || props.letrasClicadas.includes(letra)) ? "desabilitada" : "habilitada"}
                        key={letra}
                        onClick={() => props.selecionarLetra(letra, indice)}
                        disabled={props.disabled || props.letrasClicadas.includes(letra)}
                    >
                        {letra.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>
    );
}
