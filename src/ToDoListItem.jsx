import React from "react";
import "./TodoListItem.css";
import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";


const ToDoListItem = ({ title }) => {
  return (
    <div className="item mt-[15px] p-[10px]">
      <div className="item-text">
        <p>{title}</p>
      </div>
      <div className="item-actions">
        <button className="btn-edit">
          <PencilIcon className="w-5 h-5 text-blue-500" />
        </button>
        <button className="btn-delete">
          <TrashIcon className="w-5 h-5 text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default ToDoListItem;
