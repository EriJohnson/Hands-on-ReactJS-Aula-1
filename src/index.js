import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  // ENTRADA, RODANDO, FIM!
  const [estado, setEstado] = useState("ENTRADA");

  // Palpite
  const [palpite, setPalpite] = useState(150);
  const [numeroPalpites, setNumeroPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumeroPalpites(1);
    setPalpite(Math.floor(Math.random() * (300 - 0) + 0));
  };

  if (estado === "ENTRADA") {
    return (
      <div className="App">
        <p>
          Escolha um número entre <b>0</b> e <b>300</b> que eu tentarei
          adivinhar...
        </p>
        <button onClick={iniciarJogo}>começar a jogar!</button>
      </div>
    );
  }

  const menor = () => {
    setNumeroPalpites(numeroPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumeroPalpites(numeroPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };
  if (estado === "FIM") {
    return (
      <div className="App">
        <p>
          Ah, Miserave! <br /> Acertei com <b>{numeroPalpites}</b> palpite(s)
          <br />
        </p>
        <button onClick={iniciarJogo}>Jogar Novamente!</button>
      </div>
    );
  }

  // Chute de 0 a 300
  // Palmites que a máquina deu

  return (
    <div className="App">
      <p>
        O seu número é <b>{palpite}</b>?
      </p>

      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou, Miserave!</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
