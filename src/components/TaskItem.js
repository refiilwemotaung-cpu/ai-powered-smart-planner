import React, { useState } from "react";
import { useTasks } from "../contexts/TaskContext";
//import "./TaskItem.css";

const TaskItem = ({ task }) => {
  const { updateTask, deleteTask, toggleTaskCompletion } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: task.title,
    description: task.description,
    priority: task.priority,
  });

  const handleSave = () => {
    updateTask(task.id, {
      ...editData,
      title: editData.title.trim(),
      description: editData.description.trim(),
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      title: task.title,
      description: task.description,
      priority: task.priority,
    });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const getPriorityInfo = (priority) => {
    const config = {
      high: { label: "High", color: "var(--error-color)", emoji: "🔥" },
      medium: { label: "Medium", color: "var(--warning-color)", emoji: "⚡" },
      low: { label: "Low", color: "var(--success-color)", emoji: "💤" },
    };
    return config[priority] || config.medium;
  };

  const priorityInfo = getPriorityInfo(task.priority);

  if (isEditing) {
    return (
      <div className="task-item-editing">
        <input
          type="text"
          name="title"
          value={editData.title}
          onChange={handleChange}
          className="edit-input"
          placeholder="Task title"
          autoFocus
        />
        <textarea
          name="description"
          value={editData.description}
          onChange={handleChange}
          className="edit-textarea"
          placeholder="Task description"
          rows="2"
        />
        <select
          name="priority"
          value={editData.priority}
          onChange={handleChange}
          className="edit-select"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <div className="edit-actions">
          <button onClick={handleSave} className="save-btn">
            💾 Save
          </button>
          <button onClick={handleCancel} className="cancel-btn">
            ❌ Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`task-item ${task.priority} ${
        task.completed ? "completed" : ""
      }`}
    >
      <div className="task-header">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          className="task-checkbox"
        />
        <div className="task-content">
          <h4 className="task-title">{task.title}</h4>
          {task.description && (
            <p className="task-description">{task.description}</p>
          )}
          <div className="task-meta">
            <span
              className="task-priority"
              style={{ color: priorityInfo.color }}
            >
              {priorityInfo.emoji} {priorityInfo.label}
            </span>
          </div>
        </div>
      </div>

      <div className="task-actions">
        <button
          onClick={() => setIsEditing(true)}
          className="action-btn edit-btn"
          title="Edit task"
        >
          ✏️
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="action-btn delete-btn"
          title="Delete task"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
