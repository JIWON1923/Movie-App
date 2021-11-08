import React from "react";
import Button from "./Button"; 
import styles from "./App.module.css";
import {useState, useEffect} from "react"

function App() {
  const [count, setCount] = useState(0);
  const onClick = () => setCount((prev) => prev + 1);
  //const iRunOnlyOnce = () => console.log("I run only once");
  console.log("I run all the time");
  //useEffect(iRunOnlyOnce, []); // 단 한번만 실행될 수 있도록 도와주는 함수. (API 호출 등에 사용)
  
  useEffect(()=> console.log("Call the API..."), []) // 위와 동일한 코드
  return (
    <div>
      <h1 > {count} </h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
