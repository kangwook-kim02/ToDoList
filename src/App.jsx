import './App.css'
import Today from "./components/Today";
import Add from "./components/Add";
import ToDoList from './components/ToDoList';

import { useState } from "react";

function App() {
  const [content, setContent] = useState("");
  const [items, setItems] = useState(["React 공부하기", "빨래하기", "노래연습하기"]);
  return (
    <>
      <div className='container'>
        <Today />
        <Add content={content} setContent={setContent} items={items} setItems={setItems} />
        <ToDoList items={items} setItems={setItems} />
      </div>
    </>
  )
}

export default App
