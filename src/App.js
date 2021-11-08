import React from "react";
import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react"


function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo == '') return; // todo가 비어있다면 함수 작동 x
    setToDos((currentArray => [toDo, ...currentArray])) // 기존 값과 새로운 값을 리스트로 연결
    setToDo(""); // 비어있지 않은 상태에서 submit 하면 input 초기화
  };

  return (
    <div>
      <h1> MY TODO ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your todo..." />
        <button>Add To Do </button>
      </form>
      <ul>
        {toDos.map((item, index) =>
          <li key = {index}>{ item}</li>)}
      </ul>
    </div>
  )
}

export default App;
