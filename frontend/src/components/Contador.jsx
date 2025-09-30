export default function Contador({ totalDeCarros }) {
  return (
    <div className="bg-purple-50 text-purple-800 p-4 rounded-lg text-center mb-6">
      <p className="font-bold text-lg">
        Total de Marcas na Lista:
        <span className="ml-2 text-2xl">{totalDeCarros}</span>
      </p>
    </div>
  );
}
