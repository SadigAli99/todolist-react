import React from "react";
import ToDoListItem from "./ToDoListItem";

const App = () => {
  return (
    <div className="dark:bg-gray-800 rounded-lg px-6 py-8 w-3/5 mx-auto">
      <h2 className="text-center text-3xl font-bold">To Do List</h2>
      <div className="to-do-list mt-[20px]">
        <ToDoListItem title="Item 1" />
        <ToDoListItem title="Item 2" />
        <ToDoListItem title="Item 3" />
      </div>
    </div>
  );
};

export default App;
