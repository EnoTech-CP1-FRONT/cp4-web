// FiltroDeNomes.js
import { useState } from "react";

// 1. Recebe a lista completa de nomes via props
export default function FiltroDeNomes({ nomes }) {
  // 2. Usa useState para controlar o texto que o usuário digita na busca
  const [filtro, setFiltro] = useState("");

  // 3. Lógica para filtrar a lista:
  // Converte tanto o nome quanto o filtro para minúsculas para a busca não diferenciar maiúsculas/minúsculas
  const nomesFiltrados = nomes.filter((nome) =>
    nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <h3>Busque um Nome:</h3>
      <input
        type="text"
        placeholder="Digite para filtrar..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        style={{ marginBottom: '1rem' }} // Apenas um estilo para espaçamento
      />

      <h4>Nomes na Lista:</h4>
      {/* Se a lista filtrada estiver vazia, exibe uma mensagem */}
      {nomesFiltrados.length > 0 ? (
        <ul>
          {/* Mapeia e exibe APENAS os nomes filtrados */}
          {nomesFiltrados.map((nome, index) => (
            <li key={index}>{nome}</li>
          ))}
        </ul>
      ) : (
        <p>Nenhum nome encontrado.</p>
      )}
    </div>
  );
}