import { supabase } from "@/lib/supabase";

export default async function RecipeDetail({ params }: { params: { id: string } }) {
  const { data: recipe } = await supabase
    .from("recipes")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!recipe) return <p>Receta no encontrada ❌</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <p className="text-gray-700 mt-4">{recipe.description}</p>
    </div>
  );
}