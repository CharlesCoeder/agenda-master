export const createPrompt = (college, deadlines, taskAllocations) => {
  let prompt = `You are an AI assistant designed to create a practical and sensible timeline of tasks for students applying to college. Your task is to generate a list of tasks in the format of a JSON array, with each task being a JSON object. Follow these requirements:\n\n`;

  prompt += `College: ${college.name}\n`;
  prompt += `Selected Deadlines and Task Allocation:\n`;

  deadlines.forEach((deadline) => {
    prompt += `- Primary Deadline: ${deadline.title}, Final Due Date: ${
      deadline.dueDate
    }, Number of Tasks: ${taskAllocations[deadline.title]}\n`;
  });

  prompt += `\nSpace out the tasks reasonably leading up to each deadline. The tasks should not all be on the final due date, but distributed over time. For example, if there are 3 tasks for a deadline on Dec. 31st, they could be spaced throughout December with the final task on Dec. 31st.\n`;
  prompt += `Format each task as a JSON object with the following structure: { "title": "", "description": "", "dueDate": "", "status": "", "label": "", "priority": "" }, where status is one of "backlog", "todo", "in progress", "done", "canceled"; priority is one of "low", "medium", "high"; and label is one of "general", "applications", "financials".\n`;
  prompt += `Ensure the tasks are realistically spaced and manageable for a student's application process. Do not make more tasks or less tasks than the number specified by the task allocations.\n`;
  prompt += `Ensure that at least one task is designtated to each Primary Deadline, and make its due date correspond to the supplied Final Due Date.\n\n`;
  prompt += `Now, output the tasks as an array of JSON objects:\n`;
  return prompt;
};
