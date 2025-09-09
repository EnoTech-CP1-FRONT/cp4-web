import { useState } from "react";

export default function FiltroDeNomes({ nomes }) {
  const [filtro, setFiltro] = useState("");

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
        style={{ marginBottom: '1rem' }} 
        />

      <h4>Nomes na Lista:</h4>
      {nomesFiltrados.length > 0 ? (
        <ul>
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