import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// PUT: actualizar receta por id
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json();
  const { title, ingredients, steps } = body;

  const { data, error } = await supabase
    .from("recipes")
    .update({ title, ingredients, steps })
    .eq("id", params.id)
    .select();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 200 });
}

// DELETE: eliminar receta por id
export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const { error } = await supabase.from("recipes").delete().eq("id", params.id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ message: "Receta eliminada" }, { status: 200 });
}