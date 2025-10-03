import React from "react";
import { useTasks } from "../contexts/TaskContext";
import TaskItem from "./TaskItem";
import "../styles/TaskList.css";

const TaskList = () => {
  const { tasks, getAIRecommendedTasks } = useTasks();

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);
  const aiRecommendedTasks = getAIRecommendedTasks();

  if (tasks.length === 0) {
    return (
      <section className="task-list-section">
        <div className="empty-state">
          <div className="empty-icon">📝</div>
          <h3>No tasks yet!</h3>
          <p>Add your first task to get started with SmartPlanner</p>
        </div>
      </section>
    );
  }

  return (
    <section className="task-list-section">
      <div className="task-list-container">
        {/* AI Recommended Tasks */}
        {pendingTasks.length > 0 && (
          <div className="task-category">
            <div className="category-header">
              <h2>AI Recommended Order</h2>
              <span className="ai-badge">🤖 Smart Sort</span>
            </div>
            <p className="category-subtitle">
              Tasks sorted by priority, due date, and complexity
            </p>
            <div className="tasks-grid">
              {aiRecommendedTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          </div>
        )}

        {/* Completed Tasks */}
        {completedTasks.length > 0 && (
          <div className="task-category">
            <div className="category-header">
              <h2>Completed Tasks</h2>
              <span className="count-badge">{completedTasks.length} done</span>
            </div>
            <div className="tasks-grid">
              {completedTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TaskList;
