import React from "react";
import { ThemeProvider } from "./contexts/ThemeContexts";
import { TaskProvider } from "./contexts/TaskContext";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <div className="app">
          <Header />
          <main className="main-content">
            <div className="container">
              <TaskForm />
            </div>
          </main>
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
