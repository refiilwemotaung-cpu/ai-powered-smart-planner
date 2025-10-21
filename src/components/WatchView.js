import React from "react";
import { useTasks } from "../contexts/TaskContext";
import { useTheme } from "../contexts/ThemeContexts";
import "./WatchView.css";

const WatchView = () => {
  const { tasks } = useTasks();
  const { theme } = useTheme();

  // Simple function to get today's tasks
  const getTodayTasks = (tasks) => {
    const today = new Date();
    const todayString = today.toISOString().split("T")[0];

    return tasks
      .filter((task) => {
        if (!task.dueDate || task.completed) return false;
        const taskDate = task.dueDate.split("T")[0];
        return taskDate === todayString;
      })
      .sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });
  };

  const todayTasks = getTodayTasks(tasks).slice(0, 3);

  if (todayTasks.length === 0) {
    return (
      <div className="watch-view">
        <div className="watch-container">
          <div className="watch-header">
            <h3>📱 Today</h3>
          </div>
          <div className="watch-content">
            <div className="empty-watch">
              <div className="empty-icon">🎉</div>
              <p>No tasks!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="watch-view">
      <div className="watch-container">
        <div className="watch-header">
          <h3>📱 Today</h3>
          <span className="task-count">{todayTasks.length}</span>
        </div>
        <div className="watch-content">
          {todayTasks.map((task) => (
            <div key={task.id} className={`watch-task ${task.priority}`}>
              <div className="watch-task-main">
                <span className="watch-task-title">{task.title}</span>
                <span className={`watch-task-priority ${task.priority}`}>
                  {task.priority === "high"
                    ? "🔥"
                    : task.priority === "medium"
                    ? "⚡"
                    : "💤"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchView;
