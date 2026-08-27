"use client";

import { useEffect, useState } from "react";

export default function ExternalPage() {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/recetas");
        const data = await res.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error cargando API externa:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p className="p-6">Cargando recetas desde API externa...</p>;

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recetas desde API externa 🍲</h1>
      {recipes.length > 0 ? (
        <ul className="space-y-4">
          {recipes.map((receta) => (
            <li key={receta.id} className="border p-4 rounded">
              <h2 className="text-xl font-semibold">{receta.title}</h2>
              <p><strong>Ingredientes:</strong> {receta.ingredients}</p>
              <p><strong>Pasos:</strong> {receta.steps}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay recetas disponibles en la API.</p>
      )}
    </section>
  );
}