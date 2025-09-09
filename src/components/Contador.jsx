export default function Contador({ totalDeNomes }) {
  return (
    <div className="bg-purple-50 text-purple-800 p-4 rounded-lg text-center mb-6">
      <p className="font-bold text-lg">
        Total de Nomes na Lista: 
        <span className="ml-2 text-2xl">{totalDeNomes}</span>
      </p>
    </div>
  );
}