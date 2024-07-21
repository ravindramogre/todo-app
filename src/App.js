import Form from './components/Form';
import Todos from './components/Todos';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from './redux/todoapp/actions';
function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);
  return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
      <Form />
      <Todos />
      {todos.length > 0 &&  <button onClick={() => dispatch(deleteAll())}className='btn btn-danger btn-md delete-all'>DELETE ALL</button>}
    </div>
  );
}

export default App;
