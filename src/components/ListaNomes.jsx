import { useState } from "react";

function ListaNomes() {
  const [nomes, setNomes] = useState([]);
  
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
      <input
        type="text"
        placeholder="Digite um nome para adicionar"
        value={valorInput}
        onChange={(evento) => setValorInput(evento.target.value)}
      />

      <button onClick={adicionarNome}>Adicionar Nome</button>
      
      <hr />

      <h3>Nomes Adicionados:</h3>
      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaNomes;