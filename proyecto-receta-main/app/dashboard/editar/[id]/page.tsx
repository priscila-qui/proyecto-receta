"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function EditarRecetaPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  useEffect(() => {
    async function fetchRecipe() {
      const { data } = await supabase.from("recipes").select("*").eq("id", params.id).single();
      if (data) {
        setTitle(data.title);
        setIngredients(data.ingredients);
        setSteps(data.steps);
      }
    }
    fetchRecipe();
  }, [params.id]);

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase
      .from("recipes")
      .update({ title, ingredients, steps })
      .eq("id", params.id);

    if (error) alert("❌ Error al actualizar receta: " + error.message);
    else {
      alert("✅ Receta actualizada");
      router.push("/dashboard");
    }
  }

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Editar receta</h1>
      <form onSubmit={handleUpdate} className="flex flex-col gap-4 max-w-md">
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 rounded" />
        <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} className="border p-2 rounded" />
        <textarea value={steps} onChange={(e) => setSteps(e.target.value)} className="border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Guardar cambios</button>
      </form>
    </section>
  );
}