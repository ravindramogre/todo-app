import React from "react";
import Icon from "react-icons-kit";
import { useDispatch, useSelector } from "react-redux";
import { trash } from "react-icons-kit/feather/trash"
import { edit2 } from "react-icons-kit/feather/edit2"
import { handleCheckBox } from "../redux/todoapp/actions";


const Todos = () => {
  const todos = useSelector((state) => state.operationsReducer);
  const dispatch = useDispatch();

  return todos.map((todo) => (
    <div key={todo.id} className="todo-box">
      <div className="content">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(handleCheckBox(todo.id))}
          ></input>
        <p
          style={
            todo.completed
              ? { textDecoration: "line-through", marginBottom: 0}
              : { textDecoration: "none", marginBottom: 0}
          }
        >{todo.todo}</p>
      </div>
      <div className="actions-box">
          <span><Icon icon={edit2}></Icon></span>
          <span><Icon icon={trash}></Icon></span>
      </div>
    </div>
  ));
};

export default Todos;
