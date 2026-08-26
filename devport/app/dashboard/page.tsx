export default function DashboardPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      {/* Encabezado */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">
          Mi panel de Recetas 🍲
        </h1>
        <p className="text-slate-400">
          Bienvenida de vuelta. Aquí puedes gestionar tus recetas y actividad.
        </p>
      </div>
      {/* Cards de métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-slate-800 rounded-xl p-6">
          <p className="text-slate-400 text-sm mb-1">Recetas publicadas</p>
          <p className="text-3xl font-bold text-white">0</p>
        </div>
        {/* Card 2 */}
        <div className="bg-slate-800 rounded-xl p-6">
          <p className="text-slate-400 text-sm mb-1">Comentarios recibidos</p>
          <p className="text-3xl font-bold text-white">0</p>
        </div>
        {/* Card 3 */}
        <div className="bg-slate-800 rounded-xl p-6">
          <p className="text-slate-400 text-sm mb-1">Favoritos</p>
          <p className="text-3xl font-bold text-white">0</p>
        </div>
      </div>
    </section>
  );
}