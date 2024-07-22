import React from "react";
import Form from "../components/Form";
import Todos from "../components/Todos";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../redux/todoapp/actions";

const Task = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);
  const partialCompleted = todos.some((todo) => todo.completed === true);
  const allCompleted = todos.every((todo) => todo.completed === true);
  return (
    <div>
      <Form />
      <Todos />
      {todos.length > 0 && (
        <React.Fragment>
          <div className="status">
            <p>Status:</p>
            {allCompleted ? (
              <p id="completed"> Completed </p>
            ) : partialCompleted ? (
              <p id="in_progress"> In Progress </p>
            ) : (
              <p id="yet_to_start"> Yet To Start </p>
            )}
          </div>
          <button
            onClick={() => dispatch(deleteAll())}
            className="btn btn-danger btn-md delete-all"
          >
            DELETE ALL SUBTASKS
          </button>
        </React.Fragment>
      )}
    </div>
  );
};

export default Task;
