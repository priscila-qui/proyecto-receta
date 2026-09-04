type RecipeCardProps = {
  title: string;
  description: string;
};

export default function RecipeCard({ title, description }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-purple-700">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
}