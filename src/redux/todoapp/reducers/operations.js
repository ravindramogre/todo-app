import { ADD_TODO, DELETE_ALL, CHECK_BOX, DELETE, EDIT } from "../actions";

const initialState = [
  { id: 1, todo: "Buy Laptop", completed: false },
  { id: 2, todo: "Master CP", completed: false },
  { id: 3, todo: "Watering Plants", completed: true },
];
export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_ALL:
      return [];
    case CHECK_BOX:
      var updated_state = [];
      state.forEach((todo) => {
        if (todo.id === action.id) {
          updated_state.push({
            ...todo,
            completed: !todo.completed,
          });
        } else {
          updated_state.push(todo);
        }
      });
      return updated_state;
    case DELETE:
      var updated_state = [];
      state.forEach((todo) => {
        if (todo.id !== action.id) {
          updated_state.push(todo);
        }
      });
      return updated_state;
    case EDIT:
      var updated_state = [];
      state.forEach((todo) => {
        if (todo.id == action.payload.id) {
          updated_state.push(action.payload);
        } else {
          updated_state.push(todo);
        }
      });
      return updated_state;
    default:
      return state;
  }
};
