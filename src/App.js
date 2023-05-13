import { useState } from "react";

import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";

export default function App() {
  const [letrasClicadas, setLetrasClicadas] = useState([]);
  const [desabilitado, setDesabilitado] = useState(true)

  function escolherPalavra(){
    setDesabilitado(false);
  }

  function selecionarLetra(letra, i){
    alert(letra);
    setLetrasClicadas([...letrasClicadas, letra])
    console.log(letrasClicadas);
  }

  return (
    <div className="App">
      <Jogo 
        escolherPalavra={escolherPalavra}
      />

      <Letras
        letrasClicadas={letrasClicadas}
        setLetrasClicadas={setLetrasClicadas}
        disabled={desabilitado}
        selecionarLetra={selecionarLetra}
      />
    </div>
  );
}

