export const aiPrioritizeTasks = (tasks) => {
  return tasks
    .map((task) => {
      let score = 0;

      const priorityScore = { high: 3, medium: 2, low: 1 };
      score += priorityScore[task.priority] || 1;

      if (task.createdAt) {
        const createdAt = new Date(task.createdAt);
        const now = new Date();
        const diffTime = now.getTime() - createdAt.getTime();
        const diffDays = diffTime / (1000 * 60 * 60 * 24);

        if (diffDays <= 7) {
          score += 1;
        }
      }

      if (task.description && task.description.length > 50) {
        score += 2;
      }

      return { ...task, aiScore: score };
    })
    .sort((a, b) => b.aiScore - a.aiScore)
    .filter((task) => !task.completed);
};

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
  if (nextTask.description && nextTask.description.length > 50) {
    reasons.push("complexity");
  }

  const reasonText =
    reasons.length > 0 ? ` because it's ${reasons.join(" and ")}` : "";

  return `I suggest working on "${nextTask.title}"${reasonText}.`;
};
