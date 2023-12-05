export default async function fetchTasks(userId) {
  try {
    const response = await fetch(`/api/tasks/${userId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
}
