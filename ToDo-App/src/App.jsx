import { useState } from "react";
import "./App.css";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  const handleForm = (event) => {
    event.preventDefault();

    const task = event.target.taskname.value.trim();

    if (!task) return;

    if (!todolist.includes(task)) {
      setTodolist([...todolist, task]);
      event.target.reset();
    } else {
      alert("Task already exists");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditTask(todolist[index]);
  };

  const handleSaveEdit = (index) => {
    const updatedTask = editTask.trim();
    if (!updatedTask) return;
    const updatedList = [...todolist];
    updatedList[index] = updatedTask;
    setTodolist(updatedList);
    setEditIndex(null);
    setEditTask("");
  };

  const handleDelete = (index) => {
    const updatedList = todolist.filter((_, i) => i !== index);
    setTodolist(updatedList);
  };

  return (
    <div className="container">
      <div className="todo-card">
        <h1>My Todo List</h1>
        <p className="subtitle">Stay organized</p>

        <form onSubmit={handleForm}>
          <input type="text" placeholder="Enter task..." name="taskname" />
          <button type="submit">Add Task</button>
        </form>

        <div className="display-list-container">
          {todolist.length === 0 ? (
            <p className="empty-message">
              No tasks yet. Add your first task! ✨
            </p>
          ) : (
            <ul>
              {todolist.map((task, index) => (
                <li key={index}>
                  {editIndex === index ? (
                    <input
                      type="text"
                      value={editTask}
                      onChange={(e) => setEditTask(e.target.value)}
                    />
                  ) : (
                    <span>{task}</span>
                  )}

                  <div className="task-actions">
                    {editIndex === index ? (
                      <button
                        type="button"
                        className="edit-btn"
                        onClick={() => handleSaveEdit(index)}
                      >
                        💾
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="edit-btn"
                        onClick={() => handleEdit(index)}
                      >
                        ✏️
                      </button>
                    )}

                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => handleDelete(index)}
                    >
                      🗑️
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
