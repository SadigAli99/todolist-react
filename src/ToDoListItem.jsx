import React from "react";
import "./TodoListItem.css";
import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";


const ToDoListItem = ({ title }) => {
    return (
        <div className="bg-green-300 item radius-[5px] shadow-lg shadow-dark-800 mt-[15px] p-[10px] pl-[20px]">
            <div className="item-text">
                <p className="text-xl">{title}</p>
            </div>
            <div className="item-actions">
                <button className="mr-[20px] outline outline-offset-4 outline-blue-500 rounded-[2px] cursor-pointer">
                    <PencilIcon onClick={() => onEdit(index, title)} className="w-5 h-5 text-blue-500" />
                </button>
                <button className="outline outline-offset-4 outline-red-500 rounded-[2px] cursor-pointer">
                    <TrashIcon className="w-5 h-5 text-red-500" />
                </button>
            </div>
        </div>
    );
};

export default ToDoListItem;
