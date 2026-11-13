import { NextResponse } from "next/server";
import { addTask, getTasks } from "@/lib/tasks";
import { taskSchema } from "@/lib/task-schema";

export const runtime = "nodejs";

export async function GET() {
  try {
    const tasks = await getTasks();
    return NextResponse.json(tasks);
  } catch (error) {
    console.error("Gagal membaca tugas:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Body harus berupa JSON yang valid" },
      { status: 400 },
    );
  }

  const parsed = taskSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  try {
    const newTask = await addTask(parsed.data);
    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    console.error("Gagal menyimpan tugas:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server." },
      { status: 500 },
    );
  }
}
