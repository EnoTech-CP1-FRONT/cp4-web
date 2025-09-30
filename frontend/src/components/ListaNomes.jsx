import { useState, useEffect } from "react";
import axios from "axios";
import Contador from "./Contador";
import FiltroDeNomes from "./FiltroDeNomes";
import backgroundImage from "../assets/bg-image.jpg"; //

const API_URL = "http://localhost:5001/carro";

export default function ListarNomes() {
  const [carros, setCarros] = useState([]);

  const consultarCarros = async () => {
    try {
      const response = await axios.get(API_URL);
      setCarros(response.data);
    } catch (error) {
      console.error("Erro ao consultar carros", error);
    }
  };

  useEffect(() => {
    consultarCarros();
  }, []);

  return (
    <main
      className="bg-cover bg-center bg-fixed min-h-screen flex justify-center p-4 sm:p-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-2xl bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-slate-800 mb-4 text-center">
          Cadastro de Marcas
        </h1>

        <Contador totalDeCarros={carros.length} />

        <div className="border-t border-slate-200 my-6"></div>

        {/* Passando a lista e a função de atualização como props */}
        <FiltroDeNomes carros={carros} onDadosAlterados={consultarCarros} />
      </div>
    </main>
  );
}
