import React, { useState } from "react";
import { useTasks } from "../contexts/TaskContext";
import "./TaskForm.css";

const TaskForm = () => {
  const { addTask } = useTasks();

  // Get today's date in YYYY-MM-DD format for the date input default
  const getTodayDate = () => {
    return new Date().toISOString().split("T")[0];
  };

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    date: getTodayDate(),
    startTime: "",
    endTime: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    // Validate time logic (end time should be after start time if both are provided)
    if (
      formData.startTime &&
      formData.endTime &&
      formData.startTime >= formData.endTime
    ) {
      alert("End time must be after start time");
      return;
    }

    addTask({
      ...formData,
      title: formData.title.trim(),
      description: formData.description.trim(),
      date: formData.date || getTodayDate(),
      startTime: formData.startTime || null,
      endTime: formData.endTime || null,
    });

    // Reset form (but keep today's date as default)
    setFormData({
      title: "",
      description: "",
      priority: "medium",
      date: getTodayDate(),
      startTime: "",
      endTime: "",
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

          {/* Date Selection */}
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="form-input"
              min={getTodayDate()}
            />
          </div>

          {/* Time Selection Section */}
          <div className="time-section">
            <div className="form-group">
              <label htmlFor="startTime">Start Time</label>
              <input
                type="time"
                id="startTime"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="endTime">End Time</label>
              <input
                type="time"
                id="endTime"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

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
