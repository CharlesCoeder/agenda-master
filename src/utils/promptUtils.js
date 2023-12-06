export const createPrompt = (college, deadlines, taskAllocations) => {
  let prompt = `You are an AI assistant designed to create a practical and sensible timeline of tasks for students applying to ${college.name}. Generate a list of tasks as a JSON array, with each task being a JSON object, adhering to the following requirements:\n\n`;

  prompt += `For each deadline, create the exact number of tasks specified. It's crucial to adhere to the specified number of tasks for each deadline.\n`;
  prompt += `At least one task for each deadline should directly involve ${college.name} and its due date should be the same as the final due date of that deadline.\n`;
  prompt += `Space out the remaining tasks reasonably leading up to each deadline. For example, if there are 3 tasks for a deadline on Dec. 31st, the tasks could be spaced throughout December, with the final task on Dec. 31st.\n`;
  prompt += `Task structure: { "title": "", "description": "", "dueDate": "", "status": "", "label": "", "priority": "" }, where status is one of "backlog", "todo", "in progress", "done", "canceled"; priority is one of "low", "medium", "high"; and label is one of "general", "applications", "financials".\n\n`;
  prompt += `I MUST EMPHASIZE TO MAKE THE RIGHT AMOUNT OF TASKS THAT ARE SPECIFIED. EACH DEADLINE IS ENCLOSED WITHIN A {} TO HELP YOU UNDERSTAND.`;

  prompt += `College name: ${college.name}:\n`;
  deadlines.forEach((deadline) => {
    prompt += `{ Create exactly ${
      taskAllocations[deadline.title]
    } tasks for Deadline: ${deadline.title}, Final Due Date: ${
      deadline.dueDate
    }}\n`;
  });

  prompt += `If you do not generate the right amount of tasks specified for each deadline, then I will have an issue.\n`;
  prompt += `Based on the above information, output the tasks as an array of JSON objects:\n`;
  return prompt;
};
