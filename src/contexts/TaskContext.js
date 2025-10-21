import React, { createContext, useContext, useState, useEffect } from "react";
import { aiPrioritizeTasks, getAISuggestion } from "../utils/aiPrioritizer";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTasks = localStorage.getItem("smartplanner-tasks");
    if (savedTasks) {
      try {
        const parsedTasks = JSON.parse(savedTasks);
        setTasks(parsedTasks);
      } catch (error) {
        console.error("Error loading tasks from localStorage:", error);
        setTasks([]);
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem("smartplanner-tasks", JSON.stringify(tasks));
      } catch (error) {
        console.error("Error saving tasks to localStorage:", error);
      }
    }
  }, [tasks, isLoading]);

  const addTask = (task) => {
    const newTask = {
      id: Date.now().toString(),
      title: task.title?.trim() || "",
      description: task.description?.trim() || "",
      priority: task.priority || "medium",
      date: task.date || new Date().toISOString().split("T")[0],
      startTime: task.startTime || null,
      endTime: task.endTime || null,
      createdAt: new Date().toISOString(),
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    return newTask;
  };

  const updateTask = (id, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleTaskCompletion = (id) => {
    toggleTask(id);
  };

  const getAIRecommendedTasks = () => {
    return aiPrioritizeTasks(tasks);
  };

  const getAITaskSuggestion = () => {
    return getAISuggestion(tasks);
  };

  const getTasksForDate = (date) => {
    return tasks.filter((task) => task.date === date);
  };

  const getScheduledTasks = () => {
    return tasks.filter((task) => task.startTime && task.endTime);
  };

  const value = {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    toggleTaskCompletion,
    getAIRecommendedTasks,
    getAITaskSuggestion,
    getTasksForDate,
    getScheduledTasks,
    isLoading,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
