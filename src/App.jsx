import React, { useState } from "react";
import ToDoListItem from "./ToDoListItem";
import { PlusIcon } from "@heroicons/react/16/solid";

const App = () => {
    const [showInput, setShowInput] = useState(false);
    const [todoText, setTodoText] = useState("");
    const [todos, setTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');

    const addTodo = () => {
        if (todoText.trim() === "") return;
        setTodos([...todos, todoText]);
        setTodoText("");
        setShowInput(false);
    };

    return (
        <div className="dark:bg-gray-800 rounded-lg px-6 py-8 w-3/5 mx-auto">
            <h2 className="text-center text-3xl font-bold">To Do List</h2>

            <div className="flex justify-end my-[10px]">
                <button
                    className="cursor-pointer outline outline-offset-4 outline-blue-500 rounded-[2px]"
                    onClick={() => setShowInput(true)}
                >
                    <PlusIcon className="w-5 h-5 text-blue-500" />

                    {showInput && (
                        <input
                            type="text"
                            value={todoText}
                            onChange={(e) => setTodoText(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    addTodo();
                                }
                            }}
                        />
                    )}
                </button>
            </div>

            <div className="to-do-list mt-[20px]">
                {todos.map((todo, index) => {
                    return <ToDoListItem
                        key={index}
                        title={todo}
                        index={index}
                        onEdit={(i, currentText) => {
                            setEditIndex(i);
                            setEditText(currentText);
                            setShowInput(true);
                        }}
                    />;
                })}
            </div>
        </div>
    );
};

export default App;
