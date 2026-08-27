import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-slate-900 text-white shadow">
      <Link href="/">Inicio</Link>
      <Link href="/recipes">Recetas</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Registro</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/external">API externa</Link>
    </nav>
  );
}