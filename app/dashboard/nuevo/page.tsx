"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function NewRecipePage() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.from("recipes").insert([
      {
        title,
        ingredients,
        steps,
      },
    ]);

    if (error) {
      console.error("Error creando receta:", error);
      alert("No se pudo crear la receta ❌");
    } else {
      alert("Receta creada ✅");
      router.push("/dashboard"); // redirige al panel privado
    }
  }

  return (
    <section className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Nueva receta 🍲</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Título de la receta"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Ingredientes (separados por comas)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Pasos de preparación"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          Guardar receta
        </button>
      </form>
    </section>
  );
}