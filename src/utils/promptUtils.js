export const createPrompt = (college, deadlines, taskAllocations) => {
  let prompt = `You are a helpful assistant designed to output JSON. Based on the following information, create a list of tasks in JSON format:\n\n`;

  prompt += `College: ${college.name}\n`;
  prompt += `Selected Deadlines:\n`;

  deadlines.forEach((deadline) => {
    prompt += `- ${deadline.title} on ${deadline.dueDate}: ${
      taskAllocations[deadline.title]
    } tasks\n`;
  });

  prompt += `\nGenerate tasks with the following structure: { title, description, dueDate, status, label, priority }.\n`;
  return prompt;
};
