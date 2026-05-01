import "./TodoListItem.css";
import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";

const ToDoListItem = ({ title, index, onEdit, onDelete }) => {
  return (
    <div className="item rounded-md border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:border-slate-300">
      <div className="item-text min-w-0">
        <p className="break-words text-base font-medium text-slate-800">{title}</p>
      </div>
      <div className="item-actions ml-4 flex items-center gap-2">
        <button
          onClick={() => onEdit(index, title)}
          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md text-blue-600 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Edit todo"
        >
          <PencilIcon className="h-5 w-5" />
        </button>
        <button
          onClick={() => onDelete(index)}
          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md text-red-600 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          aria-label="Delete todo"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ToDoListItem;
