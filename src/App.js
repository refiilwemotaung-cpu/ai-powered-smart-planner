import React from "react";
import { ThemeProvider } from "./contexts/ThemeContexts";
import { TaskProvider } from "./contexts/TaskContext";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import AIAssistant from "./components/AIAssistant";
import WatchView from "./components/WatchView";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

function App() {
  const isWatchView = window.innerWidth <= 240;

  return (
    <ThemeProvider>
      <TaskProvider>
        <div className="app">
          {isWatchView ? (
            <WatchView />
          ) : (
            <>
              <Header />
              <main className="main-content">
                <div className="container">
                  <AIAssistant />
                  <TaskForm />
                  <TaskList />
                </div>
              </main>
            </>
          )}
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
