import React, { useState } from "react";
import { useTasks } from "../contexts/TaskContext";
import "../styles/TaskItem.css";

const TaskItem = ({ task }) => {
  const { updateTask, deleteTask, toggleTaskCompletion } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: task.title,
    description: task.description,
    priority: task.priority,
    dueDate: task.dueDate || "",
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
      dueDate: task.dueDate || "",
    });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const getPriorityBadge = (priority) => {
    const priorityConfig = {
      high: { label: "High", class: "priority-high" },
      medium: { label: "Medium", class: "priority-medium" },
      low: { label: "Low", class: "priority-low" },
    };
    return priorityConfig[priority] || priorityConfig.medium;
  };

  const priority = getPriorityBadge(task.priority);

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {!isEditing ? (
        <>
          <div className="task-content">
            <div className="task-header">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                className="task-checkbox"
              />
              <h3 className="task-title">{task.title}</h3>
              <span className={`priority-badge ${priority.class}`}>
                {priority.label}
              </span>
            </div>

            {task.description && (
              <p className="task-description">{task.description}</p>
            )}

            <div className="task-footer">
              {task.dueDate && (
                <span className="due-date">
                  📅 Due: {new Date(task.dueDate).toLocaleDateString()}
                </span>
              )}
              <span className="created-date">
                Created: {new Date(task.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>

          <div className="task-actions">
            <button
              onClick={() => setIsEditing(true)}
              className="edit-btn"
              title="Edit task"
            >
              ✏️
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="delete-btn"
              title="Delete task"
            >
              🗑️
            </button>
          </div>
        </>
      ) : (
        <div className="task-edit">
          <input
            type="text"
            name="title"
            value={editData.title}
            onChange={handleChange}
            className="edit-input"
            placeholder="Task title"
          />
          <textarea
            name="description"
            value={editData.description}
            onChange={handleChange}
            className="edit-textarea"
            placeholder="Task description"
            rows="3"
          />
          <div className="edit-controls">
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
            <input
              type="date"
              name="dueDate"
              value={editData.dueDate}
              onChange={handleChange}
              className="edit-input"
            />
          </div>
          <div className="edit-actions">
            <button onClick={handleSave} className="save-btn">
              Save
            </button>
            <button onClick={handleCancel} className="cancel-btn">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
