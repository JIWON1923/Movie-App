import React from "react";
import Button from "./Button"; 
import styles from "./App.module.css";
import {useState, useEffect} from "react"

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setCount((prev) => prev + 1);
  //const iRunOnlyOnce = () => console.log("I run only once");
  console.log("I run all the time");
  //useEffect(iRunOnlyOnce, []); // 단 한번만 실행될 수 있도록 도와주는 함수. (API 호출 등에 사용)
  
  useEffect(()=> console.log("Call the API..."), []) // 위 주석과 동일한 코드
  useEffect(() => {
    if (keyword != "" && keyword.length > 5)
      console.log("search for", keyword);
  }, [keyword]) // keyword가 변화할 때에만 코드 실행
  return (
    <div>
      <input onChange={onChange} value={keyword} type="text" placeholder="Search here"/>
      <h1 > {count} </h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
