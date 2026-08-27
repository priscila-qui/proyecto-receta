import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET: listar recetas
export async function GET() {
  const { data, error } = await supabase.from("recipes").select("*");
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 200 });
}

// POST: crear receta
export async function POST(request: Request) {
  const body = await request.json();
  const { title, ingredients, steps, author_id } = body;

  const { data, error } = await supabase
    .from("recipes")
    .insert([{ title, ingredients, steps, author_id }])
    .select();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}