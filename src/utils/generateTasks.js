const generateTasks = async (
  college,
  selectedDeadlines,
  taskAllocations,
  setIsLoading,
  setApiResponse
) => {
  setIsLoading(true);

  try {
    const response = await fetch("/api/openai/generateTasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ college, selectedDeadlines, taskAllocations }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();
    data = JSON.parse(data); // parse twice if response is over-stringified
    const { tasks } = data;

    setApiResponse(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
  } finally {
    setIsLoading(false);
  }
};

export default generateTasks;
