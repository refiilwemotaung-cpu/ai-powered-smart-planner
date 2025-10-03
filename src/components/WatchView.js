import React from "react";
import { useTasks } from "../contexts/TaskContext";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/WatchView.css";

const WatchView = () => {
  const { tasks, toggleTaskCompletion } = useTasks();
  const { isDarkMode } = useTheme();

  // For watch view, we only show the next recommended task (or first pending task)
  const pendingTasks = tasks.filter((task) => !task.completed);
  const nextTask = pendingTasks[0];

  // If there are no pending tasks, show a congratulatory message
  if (pendingTasks.length === 0) {
    return (
      <div className="watch-view">
        <div className="watch-container">
          <div className="watch-header">
            <span className="watch-icon">⏰</span>
            <h3>SmartPlanner</h3>
          </div>
          <div className="watch-content">
            <p>No pending tasks!</p>
            <p>Great job! 🎉</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="watch-view">
      <div className="watch-container">
        <div className="watch-header">
          <span className="watch-icon">⏰</span>
          <h3>Next Task</h3>
        </div>
        <div className="watch-content">
          <div className="watch-task">
            <h4>{nextTask.title}</h4>
            {nextTask.priority && (
              <span className={`watch-priority ${nextTask.priority}`}>
                {nextTask.priority}
              </span>
            )}
            {nextTask.dueDate && (
              <p className="watch-due">
                Due: {new Date(nextTask.dueDate).toLocaleDateString()}
              </p>
            )}
          </div>
          <button
            className="watch-complete-btn"
            onClick={() => toggleTaskCompletion(nextTask.id)}
          >
            Mark Complete
          </button>
        </div>
        <div className="watch-footer">
          <p>{pendingTasks.length} task(s) remaining</p>
        </div>
      </div>
    </div>
  );
};

export default WatchView;
