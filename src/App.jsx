import './App.css'
import Today from "./components/Today";
import Add from "./components/Add";
import ToDoList from './components/ToDoList';

function App() {

  return (
    <>
      <div className='container'>
        <Today />
        <Add />
        <ToDoList />
      </div>
    </>
  )
}

export default App
