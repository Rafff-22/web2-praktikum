import type { TaskInput } from "@/lib/task-schema";

export type Task = TaskInput & { id: string };

const store = globalThis as unknown as { tasks?: Task[] };

store.tasks ??= [
  {
    id: "t1",
    title: "Laporan Praktikum Modul 6",
    deadline: "2026-11-20",
    status: "proses",
  },
];

export async function getTasks(): Promise<Task[]> {
  return store.tasks!;
}

export async function getTaskById(id: string): Promise<Task | null> {
  return store.tasks!.find((task) => task.id === id) ?? null;
}

export async function addTask(input: TaskInput): Promise<Task> {
  const task: Task = { id: crypto.randomUUID(), ...input };
  store.tasks = [...store.tasks!, task];
  return task;
}
