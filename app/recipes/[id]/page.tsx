import { supabase } from "@/lib/supabase";

interface RecipeProps {
  params: Promise<{ id: string }>;
}

export default async function RecipeDetail({ params }: RecipeProps) {
  // Obtener el id de la URL
  const { id } = await params;

  // Consultar la receta en Supabase
  const { data: recipe, error } = await supabase
    .from("recipes")
    .select("id, title, ingredients, steps")
    .eq("id", id)
    .single();

  // Mostrar el error si Supabase tiene algún problema
  if (error) {
    console.log("Error de Supabase:", error);

    return (
      <section className="p-6">
        <h1 className="text-2xl font-bold">
          Error al buscar la receta ❌
        </h1>

        <p className="mt-2">
          {error.message}
        </p>
      </section>
    );
  }

  // Si no existe la receta
  if (!recipe) {
    return (
      <section className="p-6">
        <p>Receta no encontrada ❌</p>
      </section>
    );
  }

  // Mostrar la receta
  return (
    <section className="max-w-3xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">
        {recipe.title}
      </h1>

      <h2 className="text-2xl font-semibold mb-3">
        Ingredientes
      </h2>

      <div className="mb-8">
        <p className="whitespace-pre-line">
          {recipe.ingredients}
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-3">
        Preparación
      </h2>

      <div>
        <p className="whitespace-pre-line">
          {recipe.steps}
        </p>
      </div>

    </section>
  );
}