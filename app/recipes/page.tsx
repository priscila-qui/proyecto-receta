"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    async function fetchRecipes() {
      const { data, error } = await supabase
        .from("recipes")
        .select("id, title");
      if (error) {
        console.error("Error cargando recetas:", error);
      } else {
        setRecipes(data);
      }
    }
    fetchRecipes();
  }, []);

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recetas públicas 🧑‍🍳</h1>
      <ul className="space-y-2">
        {recipes.map((receta) => (
          <li key={receta.id}>
            <Link
              href={`/recipes/${receta.id}`}
              className="text-purple-600 hover:underline"
            >
              {receta.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}