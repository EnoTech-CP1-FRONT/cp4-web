// Contador.js

// Usamos a desestruturação { totalDeNomes } para pegar a prop diretamente.
export default function Contador({ totalDeNomes }) {
  return (
    <div>
      <h2>Total de Nomes na Lista: {totalDeNomes}</h2>
    </div>
  );
}