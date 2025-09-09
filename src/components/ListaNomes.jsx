import { useState } from "react";
import Contador from "./Contador";
import FiltroDeNomes from "./FiltroDeNomes";

export default function ListarNomes() {
  const [nomes, setNomes] = useState([
    'Ana',
    'Carlos',
    'Beatriz',
    'Daniel',
    'Amanda'
  ]);
  const [valorInput, setValorInput] = useState("");

  function adicionarNome() {
    if (valorInput.trim() === "") {
      return;
    }
    setNomes([...nomes, valorInput]);
    setValorInput("");
  }

  return (
    <div>
      <h1>Minha Aplicação com Filtro</h1>
      
      <Contador totalDeNomes={nomes.length} />

      <hr />
      <input
        type="text"
        value={valorInput}
        placeholder="Digite um nome para adicionar"
        onChange={(evento) => setValorInput(evento.target.value)}
      />
      <button onClick={adicionarNome}>
        Adicionar Nome
      </button>

      <hr />

      <FiltroDeNomes nomes={nomes} />


    </div>
  );
}