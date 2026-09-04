export default async function ExternalRecipes() {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken");
  const data = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Recetas externas 🍗</h1>
      {data.meals?.map((meal: any) => (
        <div key={meal.idMeal} className="border p-2 my-2">
          <h2 className="font-semibold">{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} className="w-48 rounded" />
        </div>
      ))}
    </div>
  );
}