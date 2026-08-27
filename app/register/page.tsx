"use client";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Registro exitoso 🎉");
      window.location.href = "/login"; // redirige al login después de registrarse
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-800 rounded-2xl p-8 shadow-xl">
        {/* Título */}
        <h1 className="text-2xl font-bold text-white mb-2">
          Crear cuenta
        </h1>
        <p className="text-slate-400 mb-8">
          Regístrate en RecetasApp 🍲 y comparte tus ideas culinarias.
        </p>
        {/* Campos del formulario */}
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="correo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:outline-none focus:border-green-500"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:outline-none focus:border-green-500"
          />
          <button
            onClick={handleRegister}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Registrarse
          </button>
        </div>
      </div>
    </section>
  );
}