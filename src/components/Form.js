import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoapp/actions";
const Form = () => {
  const [todoValue, setTodoValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false
    }
    setTodoValue('');
    dispatch(addTodo(todoObj))
  }
  return (
    <form className="form-group custom-form" onSubmit={handleSubmit}>
      <div className="input-and-btn">
        <input
          type="text"
          placeholder="add your todo-items here...."
          className="form-control"
          required
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        ></input>
        <button type="submit" className="btn btn-secondary btn-md">ADD</button>
      </div>
    </form>
  );
};

export default Form;
