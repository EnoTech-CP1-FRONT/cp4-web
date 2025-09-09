import { useState } from "react";

export default function FiltroDeNomes({ nomes }) {
  const [filtro, setFiltro] = useState("");

  const nomesFiltrados = nomes.filter((nome) =>
    nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <h3 className="text-xl font-semibold text-slate-700 mb-2">
        Busque um Nome
      </h3>
      <input
        type="text"
        placeholder="Digite para filtrar..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="w-full p-3 border border-slate-300 rounded-lg mb-4 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
      />

      <h4 className="font-semibold text-slate-600 mb-3">
        Resultados:
      </h4>
      {nomesFiltrados.length > 0 ? (
        <ul className="space-y-2">
          {nomesFiltrados.map((nome, index) => (
            <li key={index} className="bg-slate-50 p-3 rounded-md text-slate-800">
              {nome}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-slate-500 text-center p-4">
          Nenhum nome encontrado.
        </p>
      )}
    </div>
  );
}