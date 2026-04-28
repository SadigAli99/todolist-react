import React from "react";
import ToDoListItem from "./ToDoListItem";
import { PlusIcon } from "@heroicons/react/16/solid";

const App = () => {
    return (
        <div className="dark:bg-gray-800 rounded-lg px-6 py-8 w-3/5 mx-auto">
            <h2 className="text-center text-3xl font-bold">To Do List</h2>

            <div className="flex justify-end my-[10px]">
                <button className="cursor-pointer outline outline-offset-4 outline-blue-500 rounded-[2px]">
                    <PlusIcon className="w-5 h-5 text-blue-500" />
                </button>
            </div>

            <div className="to-do-list mt-[20px]">
                <ToDoListItem title="Item 1" />
                <ToDoListItem title="Item 2" />
                <ToDoListItem title="Item 3" />
            </div>
        </div>
    );
};

export default App;
