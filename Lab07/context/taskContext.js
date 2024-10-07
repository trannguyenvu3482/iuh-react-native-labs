import React, { createContext, useState } from "react";
import {
  addTask,
  deleteTask,
  getTask,
  toggleTask,
  updateTask,
} from "./actions/taskActions";

const TaskContext = createContext();

const initialTasks = [
  {
    id: 1,
    title: "Task 1",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Task 2",
    isCompleted: false,
  },
];

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => addTask(prevTasks, newTask));
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks((prevTasks) => updateTask(prevTasks, updatedTask));
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => deleteTask(prevTasks, taskId));
  };

  const handleGetTask = (taskId) => {
    return getTask(tasks, taskId);
  };

  const handleToggleTask = (taskId) => {
    setTasks((prevTasks) => toggleTask(prevTasks, taskId));
    console.log(tasks);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        handleAddTask,
        handleUpdateTask,
        handleDeleteTask,
        handleGetTask,
        handleToggleTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
