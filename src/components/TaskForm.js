import React, { useState } from "react";
import { useTasks } from "../contexts/TaskContext";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/TaskForm.css";

const TaskForm = () => {
  const { addTask } = useTasks();
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    addTask({
      ...formData,
      title: formData.title.trim(),
      description: formData.description.trim(),
    });

    // Reset form
    setFormData({
      title: "",
      description: "",
      priority: "medium",
      dueDate: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="task-form-section">
      <div className="form-container">
        <h2>Add New Task</h2>
        <form onSubmit={handleSubmit} className="task-form">
          <div className="form-group">
            <label htmlFor="title">Task Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="What needs to be done?"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Add details (optional)"
              rows="3"
              className="form-textarea"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="priority">Priority</label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="form-select"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="dueDate">Due Date</label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            <span className="btn-icon">+</span>
            Add Task
          </button>
        </form>
      </div>
    </section>
  );
};

export default TaskForm;
