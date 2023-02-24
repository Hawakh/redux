import { useState } from "react";
import Modal from "react-modal";
import style from '../style.css';

const EditTodo = ({ todo, onSubmit, onCancel }) => {
  const [name, setName] = useState(todo.name);
  const [description, setDescription] = useState(todo.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...todo, name, description });
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Modal isOpen={true}>
      <h2>Edit Todo</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default EditTodo;