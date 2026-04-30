import React from "react";

const DeleteModal = ({ onConfirm, onCancel }) => {
  return (
    <div>
      <p>Are you sure?</p>

      <button onClick={onCancel}>Cancel</button>
      <button onClick={onConfirm}>Delete</button>
    </div>
  );
};

export default DeleteModal;
