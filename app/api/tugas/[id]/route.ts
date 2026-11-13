import { NextResponse } from "next/server";
import { getTaskById } from "@/lib/tasks";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    const task = await getTaskById(id);
    if (!task) {
      return NextResponse.json(
        { error: "Tugas tidak ditemukan" },
        { status: 404 },
      );
    }

    return NextResponse.json(task);
  } catch (error) {
    console.error("Gagal membaca tugas:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server." },
      { status: 500 },
    );
  }
}
