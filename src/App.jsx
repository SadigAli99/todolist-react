import { useState, useEffect } from "react";
import ToDoListItem from "./ToDoListItem";
import { PlusIcon } from "@heroicons/react/16/solid";
import DeleteModal from "./DeleteModal";
import { getTodos, createTodo, updateTodo, deleteTodo } from "./api/todosApi";

const App = () => {
  const [showInput, setShowInput] = useState(false);
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const addTodo = async () => {
    if (todoText.trim() === "") return;
    if (editId === null) {
      const newTodo = await createTodo({
        'title' : todoText.trim(),
      });
      setTodos([...todos, newTodo]);
    } else {
      const updatedTodo = await updateTodo(editId, {
        title : todoText.trim(),
      });

      setTodos(todos.map((todo) => {
        if(todo.id === editId){
          return updatedTodo;
        }

        return todo;
      }));
      setEditId(null);
    }
    setTodoText("");
    setShowInput(false);
  };

  const requestDelete = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    await deleteTodo(deleteId);
    setTodos(todos.filter((todo) => todo.id !== deleteId));
    setDeleteId(null);
    setShowDeleteModal(false);
  };

  const cancelDelete = () => {
    setDeleteId(null);
    setShowDeleteModal(false);
  };

  useEffect(() => {
    const loadTodos = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    loadTodos();
  },[]);

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
              setEditId(null);
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
              placeholder={editId === null ? "Add a new task" : "Edit task"}
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
              {editId === null ? "Add" : "Save"}
            </button>
          </div>
        )}

        <div className="mt-6 space-y-3">
          {todos.length === 0 && (
            <div className="rounded-md border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-500">
              No tasks yet. Add your first one.
            </div>
          )}

          {todos.map((todo) => {
            return (
              <ToDoListItem
                key={todo.id}
                title={todo.title}
                id={todo.id}
                onEdit={(i, currentText) => {
                  setEditId(i);
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
