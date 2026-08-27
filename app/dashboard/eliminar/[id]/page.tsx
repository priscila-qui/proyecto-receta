"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function EliminarRecetaPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  async function handleDelete() {
    const { error } = await supabase.from("recipes").delete().eq("id", params.id);
    if (error) alert("❌ Error al eliminar receta: " + error.message);
    else {
      alert("✅ Receta eliminada");
      router.push("/dashboard");
    }
  }

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Eliminar receta</h1>
      <p>¿Estás seguro de que quieres eliminar esta receta?</p>
      <div className="flex gap-4 mt-4">
        <button onClick={handleDelete} className="bg-red-600 text-white p-2 rounded">Sí, eliminar</button>
        <button onClick={() => router.push("/dashboard")} className="bg-gray-600 text-white p-2 rounded">Cancelar</button>
      </div>
    </section>
  );
}