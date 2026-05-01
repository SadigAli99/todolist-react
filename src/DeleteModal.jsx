const DeleteModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-5 shadow-xl ring-1 ring-slate-200">
        <h3 className="text-lg font-semibold text-slate-900">Delete task?</h3>
        <p className="mt-2 text-sm text-slate-500">
          This action cannot be undone.
        </p>

        <div className="mt-5 flex justify-end gap-3">
          <button
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
