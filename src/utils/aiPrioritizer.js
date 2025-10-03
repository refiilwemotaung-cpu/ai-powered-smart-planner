// Simple AI algorithm for task prioritization
export const aiPrioritizeTasks = (tasks) => {
  return tasks
    .map((task) => {
      let score = 0;

      // Priority scoring
      const priorityScore = { high: 3, medium: 2, low: 1 };
      score += priorityScore[task.priority] || 1;

      // Due date urgency
      if (task.dueDate) {
        const today = new Date();
        const dueDate = new Date(task.dueDate);
        const diffTime = dueDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 0) score += 10; // Overdue
        else if (diffDays === 0) score += 5; // Due today
        else if (diffDays <= 2) score += 3; // Due in 2 days
        else if (diffDays <= 7) score += 1; // Due in a week
      }

      // Task complexity (based on description length)
      if (task.description && task.description.length > 50) {
        score += 2;
      }

      return { ...task, aiScore: score };
    })
    .sort((a, b) => b.aiScore - a.aiScore)
    .filter((task) => !task.completed);
};

// AI suggestion for next task
export const getAISuggestion = (tasks) => {
  const pendingTasks = tasks.filter((task) => !task.completed);
  if (pendingTasks.length === 0) {
    return "All tasks completed! Great job! 🎉";
  }

  const recommendedTasks = aiPrioritizeTasks(pendingTasks);
  const nextTask = recommendedTasks[0];

  if (!nextTask) return "No tasks available";

  const reasons = [];
  if (nextTask.priority === "high") reasons.push("high priority");
  if (nextTask.dueDate && new Date(nextTask.dueDate) <= new Date()) {
    reasons.push("overdue");
  } else if (nextTask.dueDate) {
    reasons.push("approaching deadline");
  }

  const reasonText =
    reasons.length > 0 ? ` because it's ${reasons.join(" and ")}` : "";

  return `I suggest working on "${nextTask.title}"${reasonText}.`;
};
