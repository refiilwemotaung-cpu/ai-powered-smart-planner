import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { TaskProvider } from "./contexts/TaskContext";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import AIAssistant from "./components/AIAssistant";
import WatchView from "./components/WatchView";
import "./styles/App.css";

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <div className="app">
          <WatchView />
          <div className="desktop-view">
            <Header />
            <main className="main-content">
              <div className="container">
                <AIAssistant />
                <TaskForm />
                <TaskList />
              </div>
            </main>
          </div>
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
