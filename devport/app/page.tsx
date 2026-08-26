import { supabase } from "@/lib/supabase";

export default async function HomePage() {
  const { data: recipes, error } = await supabase.from("recipes").select("*");

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Recetas guardadas</h1>
      <ul>
        {recipes?.map((r) => (
          <li key={r.id} className="border p-2 my-2">
            <h2 className="font-semibold">{r.title}</h2>
            <p>{r.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}