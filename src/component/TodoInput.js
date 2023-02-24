import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";
import { v1 as uuidv1 } from "uuid";
import style from '../style.css'

const TodoInput= () => {
const dispatch = useDispatch()
    
    const [name,setName] = useState();
    const [description,setDescription] = useState();
  
    const addHandler = () => {
        dispatch(addTodo({ id: uuidv1(), name: name,description:description}));
      };





    return(
      <div className="container">
        <label className="label">Name:
        <input type="text"
        onChange={(e) =>{
          setName(e.target.value)}}className="input"
         />
         </label>
         <label className="label">description:
        <input type="text"
        onChange={(e) =>{
            setDescription(e.target.value)}}className="input"
         />
         </label >
        <button onClick={addHandler} className="button">Add</button>
      </div>
    )
  };
  export default TodoInput;