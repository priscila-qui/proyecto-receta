import { supabase } from "@/lib/supabase";
import RecipeCard from "@/components/RecipeCard";

export default async function RecipesPage() {
  const { data: recipes } = await supabase.from("recipes").select("*");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Recetas públicas 🍲</h1>
      <div className="grid gap-4">
        {recipes?.map((r) => (
          <RecipeCard key={r.id} title={r.title} description={r.description} />
        ))}
      </div>
    </div>
  );
}