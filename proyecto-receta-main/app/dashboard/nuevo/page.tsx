"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function NuevaRecetaPage() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { data, error } = await supabase
      .from("recipes")
      .insert([{ title, ingredients, steps }]);

    if (error) {
      alert("❌ Error al guardar receta: " + error.message);
    } else {
      alert("✅ Receta guardada correctamente");
    }
  }

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Agregar nueva receta</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Título de la receta"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="Ingredientes (separados por comas)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="Pasos de preparación"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Guardar receta
        </button>
      </form>
    </section>
  );
}