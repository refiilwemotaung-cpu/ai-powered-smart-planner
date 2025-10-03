import React, { useState, useEffect } from "react";
import { useTasks } from "../contexts/TaskContext";
import { getAISuggestion } from "../utils/aiPrioritizer";
import "../styles/AIAssistant.css";

const AIAssistant = () => {
  const { tasks } = useTasks();
  const [suggestion, setSuggestion] = useState("");
  const [isExpanded, setIsExpanded] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    completed: 0,
    highPriority: 0,
    overdue: 0,
  });

  useEffect(() => {
    const newSuggestion = getAISuggestion(tasks);
    setSuggestion(newSuggestion);

    const pendingTasks = tasks.filter((task) => !task.completed);
    const highPriority = pendingTasks.filter(
      (task) => task.priority === "high"
    ).length;

    const overdue = pendingTasks.filter((task) => {
      if (!task.dueDate) return false;
      return new Date(task.dueDate) < new Date();
    }).length;

    setStats({
      total: tasks.length,
      pending: pendingTasks.length,
      completed: tasks.filter((task) => task.completed).length,
      highPriority,
      overdue,
    });
  }, [tasks]);

  if (tasks.length === 0) {
    return (
      <section className="ai-assistant">
        <div className="ai-container welcome">
          <div className="ai-header">
            <div className="ai-icon">🤖</div>
            <div className="ai-title">
              <h3>AI Assistant</h3>
              <p>Ready to help you plan!</p>
            </div>
          </div>
          <div className="ai-content">
            <p>Add your first task to get AI-powered suggestions!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="ai-assistant">
      <div className={`ai-container ${isExpanded ? "expanded" : "collapsed"}`}>
        <div className="ai-header" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="ai-icon">🤖</div>
          <div className="ai-title">
            <h3>AI Assistant</h3>
            <p>{stats.pending} tasks pending</p>
          </div>
          <button className="ai-toggle">{isExpanded ? "▲" : "▼"}</button>
        </div>

        {isExpanded && (
          <div className="ai-content">
            <div className="ai-suggestion">
              <h4>💡 Smart Suggestion</h4>
              <p>{suggestion}</p>
            </div>

            <div className="ai-stats">
              <div className="stat-item">
                <span className="stat-value">{stats.total}</span>
                <span className="stat-label">Total Tasks</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{stats.pending}</span>
                <span className="stat-label">Pending</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{stats.completed}</span>
                <span className="stat-label">Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{stats.highPriority}</span>
                <span className="stat-label">High Priority</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{stats.overdue}</span>
                <span className="stat-label">Overdue</span>
              </div>
            </div>

            {stats.overdue > 0 && (
              <div className="ai-warning">
                ⚠️ You have {stats.overdue} overdue task
                {stats.overdue > 1 ? "s" : ""}!
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AIAssistant;
