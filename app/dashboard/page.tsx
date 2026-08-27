"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function DashboardPage() {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipes() {
      const { data, error } = await supabase.from("recipes").select("*");
      if (error) console.error(error);
      else setRecipes(data);
      setLoading(false);
    }
    fetchRecipes();
  }, []);

  if (loading) return <p>Cargando recetas...</p>;

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mis recetas</h1>
      <Link
        href="/dashboard/nuevo"
        className="bg-green-600 text-white p-2 rounded"
      >
        ➕ Nueva receta
      </Link>

      <ul className="mt-6 space-y-4">
        {recipes.map((receta) => (
          <li
            key={receta.id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{receta.title}</h2>
              <p className="text-gray-600">{receta.ingredients}</p>
            </div>
            <div className="flex gap-2">
              <Link
                href={`/dashboard/editar/${receta.id}`}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                ✏️ Editar
              </Link>
              <Link
                href={`/dashboard/eliminar/${receta.id}`}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                🗑️ Eliminar
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}