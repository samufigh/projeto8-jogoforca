import { useState } from "react";

import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";

export default function App() {
  const [letrasClicadas, setLetrasClicadas] = useState([]);
  const [desabilitado, setDesabilitado] = useState(true);
  const [palavra, setPalavra] = useState('');
  const [caracteresPalavra, setCaracteresPalavra] = useState([]);
  const [erros, setErros] = useState(0);
  const [fim, setFim] = useState('');

  function escolherPalavra() {
    setFim('');
    setDesabilitado(false);
    setLetrasClicadas([]);
    //conta os erros
    setErros(0);

    //escolhe uma palavra aleatoria
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    const palavraAleatoria = palavras[indiceAleatorio];
    console.log(palavraAleatoria);

    setPalavra(palavraAleatoria);
    setCaracteresPalavra(palavraAleatoria.split(''));
    console.log(caracteresPalavra);
    setPalavra(palavraAleatoria.split('').map((caracter) => (
      "_" + " "
    )))
  }

  function selecionarLetra(letra, i) {
    setLetrasClicadas([...letrasClicadas, letra])
    console.log(letrasClicadas);

    let novaPalavra = [...palavra];
    if (caracteresPalavra.includes(letra)) {
      caracteresPalavra.forEach((char, indice) => {
        if (char === letra) {
          palavra[indice] = caracteresPalavra[indice];
        }
      });


      console.log(palavra);
    } else {
      let cont = erros + 1;
      setErros(cont);
      if (cont === 6) {
        setPalavra(caracteresPalavra);
        setDesabilitado(true);
        setFim("resposta-errada");
      }
    }
    if (erros < 6 && novaPalavra.join("") === caracteresPalavra.join("")) {
      alert("ganhou");
      setPalavra(caracteresPalavra);
      setDesabilitado(true);
      setFim("resposta-certa");
    }
  }

  return (
    <div className="App">
      <Jogo
        escolherPalavra={escolherPalavra}
        palavra={palavra}
        erros={erros}
        fim={fim}
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

