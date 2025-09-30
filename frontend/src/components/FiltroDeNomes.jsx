import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5001/carro";

export default function FiltroDeNomes({ carros, onDadosAlterados }) {
  const [novoCarro, setNovoCarro] = useState({ marca: "", modelo: "" });
  const [filtro, setFiltro] = useState("");
  const [editando, setEditando] = useState(false);

  const cadastrarCarro = async () => {
    if (!novoCarro.marca || !novoCarro.modelo) {
      alert("Campos obrigatórios");
      return;
    }
    try {
      await axios.post(`${API_URL}`, novoCarro);
      setNovoCarro({ marca: "", modelo: "" });
      onDadosAlterados();
    } catch (error) {
      console.log("Erro ao cadastrar o carro", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editando) {
      alterarCarro();
    } else {
      cadastrarCarro();
    }
  };

  const carrosFiltrados = carros.filter(
    (c) =>
      c.marca.toLowerCase().includes(filtro.toLowerCase()) ||
      c.modelo.toLowerCase().includes(filtro.toLowerCase())
  );

  const alterarCarro = async () => {
    if (!novoCarro.marca || !novoCarro.modelo) {
      alert("Campos obrigatórios");
      return;
    }
    try {
      await axios.put(`${API_URL}/${novoCarro.id}`, novoCarro);
      setNovoCarro({ marca: "", modelo: "" });
      setEditando(false);
      onDadosAlterados(); // Notifica o componente pai para atualizar a lista
    } catch (error) {
      console.log("Erro ao alterar carro", error);
    }
  };

  const deletarCarro = async (id) => {
    if (window.confirm("Tem certeza que deseja deletar este carro?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        onDadosAlterados(); // Notifica o componente pai para atualizar a lista
      } catch (error) {
        console.log("Erro ao deletar carro", error);
      }
    } else {
      console.log("Opção Cancelada");
    }
  };

  const handleEditar = (carro) => {
    setNovoCarro(carro);
    setEditando(true);
  };

  return (
    <div>
      <div className="mb-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2"
        >
          <input
            type="text"
            value={novoCarro.marca}
            placeholder="Digite uma marca para adicionar"
            onChange={(e) =>
              setNovoCarro({ ...novoCarro, marca: e.target.value })
            }
            className="flex-grow p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
          />
          <input
            type="text"
            value={novoCarro.modelo}
            placeholder="Digite um modelo para adicionar"
            onChange={(e) =>
              setNovoCarro({ ...novoCarro, modelo: e.target.value })
            }
            className="flex-grow p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white font-semibold px-5 py-3 rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            {editando ? "Salvar Alterações" : "Adicionar"}
          </button>
        </form>
      </div>

      <h3 className="text-xl font-semibold text-slate-700 mb-2">
        Busque uma Marca
      </h3>
      <input
        type="text"
        placeholder="Digite para filtrar..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="w-full p-3 border border-slate-300 rounded-lg mb-4 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
      />

      <h4 className="font-semibold text-slate-600 mb-3">Resultados:</h4>
      {carrosFiltrados.length > 0 ? (
        <ul className="space-y-2">
          {carrosFiltrados.map((car) => (
            <li
              key={car.id}
              className="bg-slate-50 p-3 rounded-md text-slate-800 flex justify-between items-center"
            >
              <span>
                <strong>{car.marca}</strong> - {car.modelo}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditar(car)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Editar
                </button>
                <button
                  onClick={() => deletarCarro(car.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Deletar
                </button>
              </div>
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
