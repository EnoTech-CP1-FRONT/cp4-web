import { useState } from "react";
import Contador from "./Contador";
import FiltroDeNomes from "./FiltroDeNomes";
import backgroundImage from "../assets/bg-image.jpg"; // 

export default function ListarNomes() {
  const [nomes, setNomes] = useState([
    "Audi",
    "BMW",
    "Mercedes",
    "Ferrari",
    "Lamborghini",
  ]);
  const [valorInput, setValorInput] = useState("");

  function adicionarNome() {
    if (valorInput.trim() === "") return;
    setNomes([...nomes, valorInput]);
    setValorInput("");
  }

  return (
    <main
      className="bg-cover bg-center bg-fixed min-h-screen flex justify-center p-4 sm:p-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-2xl bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-slate-800 mb-4 text-center">
          Cadastro de Marcas
        </h1>

        <Contador totalDeNomes={nomes.length} />

        <div className="mb-6">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={valorInput}
              placeholder="Digite uma marca para adicionar"
              onChange={(evento) => setValorInput(evento.target.value)}
              className="flex-grow p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
            />
            <button
              onClick={adicionarNome}
              className="bg-purple-600 text-white font-semibold px-5 py-3 rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Adicionar
            </button>
          </div>
        </div>

        <div className="border-t border-slate-200 my-6"></div>

        <FiltroDeNomes nomes={nomes} />
      </div>
    </main>
  );
}
