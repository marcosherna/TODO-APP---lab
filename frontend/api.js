const API_URL = "/api/task";

async function getTasks() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error al obtener tareas");
  return await res.json();
}

async function getTask(taskId) {
  const res = await fetch(`${API_URL}/${taskId}`);
  if (!res.ok) throw new Error("Error al obtener la tarea");
  return await res.json();
}

async function createTask({ title, description }) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });
  if (!res.ok) throw new Error("Error al crear la tarea");
  return await res.json();
}

async function updateTask(taskId, { title, description, completed }) {
  const res = await fetch(`${API_URL}/${taskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description, completed }),
  });
  if (!res.ok) throw new Error("Error al actualizar la tarea");
  return await res.json();
}

async function deleteTask(taskId) {
  const res = await fetch(`${API_URL}/${taskId}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Error al eliminar la tarea");
  return
}
