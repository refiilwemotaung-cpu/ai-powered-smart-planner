import React from "react";
import { useTasks } from "../contexts/TaskContext";
// import "./AIAssistant.css";

const AIAssistant = () => {
  const { tasks, getAITaskSuggestion, getAIRecommendedTasks } = useTasks();
  const suggestion = getAITaskSuggestion();
  const recommendedTasks = getAIRecommendedTasks();

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
      <div className="ai-container">
        <div className="ai-header">
          <div className="ai-icon">🤖</div>
          <div className="ai-title">
            <h3>AI Assistant</h3>
            <p>{tasks.filter((t) => !t.completed).length} tasks pending</p>
          </div>
        </div>

        <div className="ai-content">
          <div className="ai-suggestion">
            <h4>💡 Smart Suggestion</h4>
            <p>{suggestion}</p>
          </div>

          {recommendedTasks.length > 0 && (
            <div className="ai-recommendations">
              <h4>🎯 Recommended Order</h4>
              <div className="recommended-list">
                {recommendedTasks.slice(0, 3).map((task, index) => (
                  <div key={task.id} className="recommended-task">
                    <span className="task-rank">{index + 1}</span>
                    <span className="task-title">{task.title}</span>
                    <span className="task-priority">{task.priority}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
