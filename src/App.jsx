import { useState } from "react";
import ToDoListItem from "./ToDoListItem";
import { PlusIcon } from "@heroicons/react/16/solid";
import DeleteModal from "./DeleteModal";

const App = () => {
  const [showInput, setShowInput] = useState(false);
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const addTodo = () => {
    if (todoText.trim() === "") return;
    if (editIndex === null) {
      setTodos([...todos, todoText.trim()]);
    } else {
      const updatedTodos = todos.map((todo, index) => {
        if (index === editIndex) {
          return todoText.trim();
        }

        return todo;
      });

      setTodos(updatedTodos);
      setEditIndex(null);
    }
    setTodoText("");
    setShowInput(false);
  };

  const requestDelete = (index) => {
    setDeleteIndex(index);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setTodos(todos.filter((todo, index) => index !== deleteIndex));
    setDeleteIndex(null);
    setShowDeleteModal(false);
  };

  const cancelDelete = () => {
    setDeleteIndex(null);
    setShowDeleteModal(false);
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <div className="mx-auto w-full max-w-2xl rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">To Do List</h2>
            <p className="mt-1 text-sm text-slate-500">
              {todos.length} task{todos.length === 1 ? "" : "s"}
            </p>
          </div>

          <button
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-blue-600 text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => {
              setShowInput(true);
              setTodoText("");
              setEditIndex(null);
            }}
            aria-label="Add todo"
          >
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>

        {showInput && (
          <div className="mt-5 flex gap-3">
            <input
              type="text"
              className="min-w-0 flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder={editIndex === null ? "Add a new task" : "Edit task"}
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTodo();
                }
              }}
            />
            <button
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              onClick={addTodo}
            >
              {editIndex === null ? "Add" : "Save"}
            </button>
          </div>
        )}

        <div className="mt-6 space-y-3">
          {todos.length === 0 && (
            <div className="rounded-md border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-500">
              No tasks yet. Add your first one.
            </div>
          )}

          {todos.map((todo, index) => {
            return (
              <ToDoListItem
                key={index}
                title={todo}
                index={index}
                onEdit={(i, currentText) => {
                  setEditIndex(i);
                  setShowInput(true);
                  setTodoText(currentText);
                }}
                onDelete={requestDelete}
              />
            );
          })}
        </div>

        {showDeleteModal && (
          <DeleteModal onConfirm={confirmDelete} onCancel={cancelDelete} />
        )}
      </div>
    </main>
  );
};

export default App;
