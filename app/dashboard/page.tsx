"use client";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    }
    getUser();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Cargando sesión...</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Bienvenida, {user.email}
      </h2>
      <p className="text-gray-600">
        Aquí podrás gestionar tus recetas, ver tus métricas y acceder a tus publicaciones.
      </p>
    </div>
  );
}