import React from "react";
import Icon from "react-icons-kit";
import { useDispatch, useSelector } from "react-redux";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";
import {
  handleCheckBox,
  handleDelete,
  handleEdit,
} from "../redux/todoapp/actions";

const Todos = ({ handleEditClick, editFormVisibility }) => {
  const todos = useSelector((state) => state.operationsReducer);
  const dispatch = useDispatch();

  return todos.map((todo) => (
    <div key={todo.id} className="todo-box">
      <div className="content">
        {!editFormVisibility && (
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(handleCheckBox(todo.id))}
          ></input>
        )}
        <p
          className="description"
          style={
            todo.completed
              ? { textDecoration: "line-through", marginBottom: 0 }
              : { textDecoration: "none", marginBottom: 0 }
          }
        >
          {todo.todo}
        </p>
      </div>
      {!editFormVisibility && (
        <div className="actions-box">
          <span>
            <Icon
              onClick={() => handleEditClick(todo)}
              icon={edit2}
            ></Icon>
          </span>
          <span>
            <Icon
              onClick={() => dispatch(handleDelete(todo.id))}
              icon={trash}
            ></Icon>
          </span>
        </div>
      )}
    </div>
  ));
};

export default Todos;
