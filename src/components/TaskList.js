import React from "react";
import { useTasks } from "../contexts/TaskContext";
import TaskItem from "./TaskItem";
import "./TaskList.css";

const TaskList = () => {
  const { tasks } = useTasks();

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  if (tasks.length === 0) {
    return (
      <section className="task-list-section">
        <div className="empty-state">
          <div className="empty-icon">📝</div>
          <h3>No tasks yet!</h3>
          <p>Add your first task to get started</p>
        </div>
      </section>
    );
  }

  return (
    <section className="task-list-section">
      <div className="task-list-container">
        {/* Pending Tasks */}
        {pendingTasks.length > 0 && (
          <div className="task-category">
            <div className="category-header">
              <h3>📋 To Do</h3>
              <span className="task-count">{pendingTasks.length}</span>
            </div>
            <div className="tasks-container">
              {pendingTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          </div>
        )}

        {/* Completed Tasks */}
        {completedTasks.length > 0 && (
          <div className="task-category">
            <div className="category-header">
              <h3>✅ Completed</h3>
              <span className="task-count">{completedTasks.length}</span>
            </div>
            <div className="tasks-container">
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
