export const addTask = (tasks, newTask) => {
  return [...tasks, newTask];
};

export const updateTask = (tasks, updatedTask) => {
  return tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
};

export const deleteTask = (tasks, taskId) => {
  return tasks.filter((task) => task.id !== taskId);
};

export const getTask = (tasks, taskId) => {
  return tasks.find((task) => task.id === taskId);
};

export const toggleTask = (tasks, taskId) => {
  const task = getTask(tasks, taskId);
  if (task) {
    return updateTask(tasks, { ...task, isCompleted: !task.isCompleted });
  }
  return addTask(tasks, { id: taskId, title: "", description: "" });
};
