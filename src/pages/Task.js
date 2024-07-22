import React, { useState } from "react";
import Form from "../components/Form";
import Todos from "../components/Todos";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../redux/todoapp/actions";

const Task = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);

  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [todo, setTodo] = useState(null);

  const partialCompleted = todos.some((todo) => todo.completed === true);
  const allCompleted = todos.every((todo) => todo.completed === true);
  let cnt = 0 ;
  const completedTasks = todos.forEach((todo) => {
    if (todo.completed){
      cnt += 1;
    }
  });
  const percentage = parseInt(cnt / todos.length * 100);

  const handleEditClick = (todo) => {
    setTodo(todo);
    setEditFormVisibility(true);
  }
  const cancelUpdate = () => {
    setEditFormVisibility(false);
  }
  return (
    <div>
      <Form editFormVisibility={editFormVisibility} todo={todo} cancelUpdate={cancelUpdate}/>
      <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      {todos.length > 0 && (
        <React.Fragment>
          <div className="status">
            <div>
            <span>Status:</span>
            </div>
            {allCompleted ? (
              <span id="completed"> Completed </span>
            ) : partialCompleted ? (
              <div class="progress">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style={{width: `${percentage}%`}}
                 // aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>{percentage}%</span>
                </div>
              </div>
            ) : (
              <span id="yet_to_start"> Yet To Start </span>
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
