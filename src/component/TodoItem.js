import { useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import { deleteTodo, updateTodo,FilterDone } from "../redux/action";
import Modal from "./EditTodo";
import style from '../style.css'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteTodo(todo.id));
  };
  const updateHandler = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (updatedTodo) => {
    dispatch(updateTodo(updatedTodo));
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const filterHandler = () => {
    dispatch(FilterDone({
      ...todo,
      isDone: !todo.isDone,
    }));
  };
  return (
    <div className="todoItem">
      <h3
      
        style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
        onClick={filterHandler}
      >
        {todo.name}
      </h3>
      <h6 className="todoDescription">{todo.description}</h6>
      <button onClick={deleteHandler} className="deleteButton">Delete</button>
      <button onClick={updateHandler} className="editButton">EDIT</button>
      {isModalOpen && (
        <Modal
          todo={todo}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default TodoItem;