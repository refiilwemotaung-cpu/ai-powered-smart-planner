import React from "react";
import { TaskProvider } from "./contexts/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <header className="app-header">
          <h1>🧠 AI SmartPlanner</h1>
          <p>Your intelligent task manager</p>
        </header>
        <main className="main-content">
          <div className="container">
            <TaskForm />
            <TaskList />
          </div>
        </main>
      </div>
    </TaskProvider>
  );
}

export default App;
