import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, handleEdit } from "../redux/todoapp/actions";

const Form = ({ editFormVisibility, todo, cancelUpdate }) => {
  const [todoValue, setTodoValue] = useState("");
  const [editValue, setEditValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setEditValue(todo?.todo);
  },[todo])

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let obj = {
      ...todo,
      todo: editValue,
      completed: false 
    }
    dispatch(handleEdit(obj));
  };

  return (
    <React.Fragment>
      {!editFormVisibility ? (
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
            <button type="submit" className="btn btn-secondary btn-md">
              ADD
            </button>
          </div>
        </form>
      ) : (
        <form className="form-group custom-form" onSubmit={handleUpdate}>
          <div className="input-and-btn">
            <input
              type="text"
              placeholder="add your todo-items here...."
              className="form-control"
              required
              value={editValue || ''}
              onChange={(e) => setEditValue(e.target.value)}
            ></input>
            <button type="submit" className="btn btn-secondary btn-md">
              UPDATE
            </button>
          </div>
          <button type="button" className="btn btn-primary btn-md back-btn" onClick={cancelUpdate}>BACK</button>
        </form>
      )}
    </React.Fragment>
  );
};

export default Form;
