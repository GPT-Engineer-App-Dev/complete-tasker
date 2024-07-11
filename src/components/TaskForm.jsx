import { useState } from "react";
import { Button } from "@/components/ui/button";

const TaskForm = ({ addTask }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      addTask(description);
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task"
        className="flex-grow p-2 border rounded mr-2"
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default TaskForm;