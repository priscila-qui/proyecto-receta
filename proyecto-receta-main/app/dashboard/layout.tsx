import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login"); // si no hay sesión, redirige al login
  }

  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold">Panel del Usuario</h1>
      {children}
    </section>
  );
}