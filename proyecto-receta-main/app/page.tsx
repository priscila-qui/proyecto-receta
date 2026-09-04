import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 flex flex-col items-center justify-center gap-6">
      {/* Título principal */}
      <h1 className="text-5xl font-bold text-white drop-shadow-lg">
        Bienvenida a <span className="text-purple-700">RecetasApp</span>
      </h1>
      {/* Subtítulo */}
      <p className="text-lg text-black max-w-md text-center font-medium">
        Comparte tus recetas favoritas y descubre nuevas ideas culinarias.
      </p>
      {/* Botón principal */}
      <Link
        href="/recipes"
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg"
      >
        Explorar recetas
      </Link>
    </main>
  );
}