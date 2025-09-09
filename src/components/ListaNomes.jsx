// App.js
import { useState } from "react";
import Contador from "./Contador"; // Importe o componente filho

export default function ListarNomes() {
  // O estado com a lista de nomes fica no componente pai.
  const [nomes, setNomes] = useState([
    'Ana',
    'Carlos',
    'Beatriz',
    'Daniel'
  ]);

  const [valorInput, setValorInput] = useState("");

  function adicionarNome() {

    // 1. CORREÇÃO: A condição de verificação deve ser uma função de método (com parênteses)
    // E o resultado da verificação deve ser uma string vazia ("").
    if (valorInput.trim() === "") {
      return; // Não adiciona nomes vazios
    }

    // 2. CORREÇÃO: Você deve chamar 'setNomes' para atualizar a lista
    // E o valor a ser adicionado deve ser 'valorInput', não uma string fixa
    setNomes([...nomes, valorInput]);

    // MELHORIA: Limpa o input após adicionar o nome
    setValorInput("");
  }

  return (
    <div>
      <h1>Minha Aplicação</h1>
      
      <Contador totalDeNomes={nomes.length} />

      <hr />

      <input 
        type="text" 
        value={valorInput}
        placeholder="Digite um nome..."
        onChange={(evento) => setValorInput(evento.target.value)}
      />

      <button onClick={adicionarNome}>
        Adicionar Nome
      </button>

      <h3>Lista de Nomes:</h3>
      <ul>
        {nomes.map((nome, index) => <li key={index}>{nome}</li>)}
      </ul>
    </div>
  );
}