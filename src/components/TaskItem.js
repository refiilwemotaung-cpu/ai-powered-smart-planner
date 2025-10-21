import React from "react";
import { useTasks } from "../contexts/TaskContext";
import "./TaskItem.css";

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask } = useTasks();

  // Format time from "13:00" to "1:00 PM"
  const formatTime = (timeString) => {
    if (!timeString) return "";
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  // Calculate duration if both start and end times are available
  const getDuration = () => {
    if (!task.startTime || !task.endTime) return null;

    const [startHours, startMinutes] = task.startTime.split(":").map(Number);
    const [endHours, endMinutes] = task.endTime.split(":").map(Number);

    const startTotal = startHours * 60 + startMinutes;
    const endTotal = endHours * 60 + endMinutes;

    const durationMinutes = endTotal - startTotal;
    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;

    if (hours > 0) {
      return `${hours}h ${minutes > 0 ? `${minutes}m` : ""}`;
    }
    return `${minutes}m`;
  };

  const handleToggle = () => {
    toggleTask(task.id);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(task.id);
    }
  };

  return (
    <div
      className={`task-item ${task.priority}-priority ${
        task.completed ? "completed" : ""
      }`}
    >
      <div className="task-content">
        <div className="task-header">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggle}
            className="task-checkbox"
          />
          <div className="task-text">
            <h4 className="task-title">{task.title}</h4>
            {task.description && (
              <p className="task-description">{task.description}</p>
            )}
          </div>
        </div>

        {/* Time Information */}
        {(task.startTime || task.endTime) && (
          <div className="task-time-info">
            <div className="time-slots">
              {task.startTime && (
                <span className="time-slot">
                  <span className="time-label">Start: </span>
                  <span className="time-value">
                    {formatTime(task.startTime)}
                  </span>
                </span>
              )}
              {task.endTime && (
                <span className="time-slot">
                  <span className="time-label"> End:</span>
                  <span className="time-value">{formatTime(task.endTime)}</span>
                </span>
              )}
            </div>
            {task.startTime && task.endTime && (
              <div className="task-duration">
                <span className="duration-label">Duration:</span>
                <span className="duration-value">{getDuration()}</span>
              </div>
            )}
          </div>
        )}

        {/* Task Meta Information */}
        <div className="task-meta">
          <span className={`priority-badge priority-${task.priority}`}>
            {task.priority}
          </span>
          {task.date && (
            <span className="task-date">
              {new Date(task.date).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </span>
          )}
        </div>
      </div>

      <div className="task-actions">
        <button
          className="task-btn delete-btn"
          onClick={handleDelete}
          title="Delete task"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
