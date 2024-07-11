import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";

const Task = ({ task, toggleComplete, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, newDescription);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center justify-between p-2 border-b">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
        className="mr-2"
      />
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="flex-grow mr-2"
        />
      ) : (
        <span className={`flex-grow mr-2 ${task.completed ? "line-through" : ""}`}>
          {task.description}
        </span>
      )}
      <Button variant="outline" size="icon" onClick={handleEdit} className="mr-2">
        <Edit className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={() => deleteTask(task.id)}>
        <Trash className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Task;