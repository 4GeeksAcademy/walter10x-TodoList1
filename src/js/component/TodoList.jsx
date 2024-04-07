import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    // Crear una copia de la matriz de tareas
    const newTasks = [...tasks];
    // Eliminar el elemento en la posición 'index' de la matriz
    newTasks.splice(index, 1);
    // Actualizar el estado con la nueva matriz que no incluye la tarea eliminada
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} onDelete={() => handleDeleteTask(index)} />
        ))}
      </div>
    </div>
  );
};

const TaskItem = ({ task, onDelete }) => {
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);

  return (
    <div className="task-item" onMouseEnter={() => setShowDeleteIcon(true)} onMouseLeave={() => setShowDeleteIcon(false)}>
      <p>{task}</p>
      {showDeleteIcon && <span className="delete-icon" onClick={onDelete}>&#10006;</span>}
    </div>
  );
};

export default TodoList;
