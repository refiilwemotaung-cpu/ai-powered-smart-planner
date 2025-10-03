import React from "react";
import { useTasks } from "../contexts/TaskContext";
import TaskItem from "./TaskItem";
import "../styles/TaskList.css";

function TaskList() {
  const { tasks } = useTasks();

  return <div className="task-list">{/* Your JSX here */}</div>;
}

export default TaskList; // This line is crucial
