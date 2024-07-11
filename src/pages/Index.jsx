import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TaskForm from "@/components/TaskForm";
import Task from "@/components/Task";

const Index = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newDescription) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <TaskForm addTask={addTask} />
        <div className="flex flex-col space-y-2">
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              editTask={editTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </main>
      <Footer tasksLeft={tasks.filter((task) => !task.completed).length} clearCompleted={clearCompleted} />
    </div>
  );
};

export default Index;