import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList.js";
import {Provider} from 'react-redux';
import {store } from './redux/store.js';
export default function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1> To Do List</h1>
      <TodoInput />
      <TodoList/>
      
    </div>
    </Provider>
  );
}