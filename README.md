# Movie app

## 1. react 준비하기
- ### React 프로젝트 만들기
nodejs,  npx, npm 설치
react app 만들기


```sh
cd Documents
npx create-react-app movieApp
```


npm을 사용하여 react 실행하기 (개발자 서버 자동 연결)


- ### React 시작하기

 
``` sh
npm start
```

- ### React Proptype
속성(prop) 값의 형식 확인을 도와줌


``` sh
npm i prop-types
```


``` jsx button.js
import PropTypes from "prop-types";
Button.PropTypes = {
    text: PropTypes.string;
}
```


자세한 정보는 [여기](https://github.com/facebook/create-react-app "facebook 깃허브")를 클릭하세요.


---

## 2. Basic React
- ### component
> HTML을 반환하는 함수이다.  
> react application은 하나의 component만 렌더링한다.   
> 하나의 component는 서로 다른 component들을 포함할 수 있다.  
> react는 component를 가져와 Browser에 HTML로 표현한다.    

  
### state Function

> **직접 값을 설정하는 방법**
>
>
> ```jsx
> const [counter, setCounter] = React.userState(0);
> setCounter(1);
> ```
>
>  

  
> **현재 state로 다음 state 계산하는 방법**
>
>
> ``` jsx
> const [counter, setCounter] = React.useState(0);
> setCounter((current) => current + 1)
> //setCounter(counter + 1);
> ```
>
>
> 예상치 못한 업데이트가 일어났을 때 반응하지 않아 혼동을 주지 않음. (안정적인 방법)  

  
### useEffect
> 특정 state가 변경될 때에만 새로고침 될 수 있도록 한다. (API 사용 시 유용)
>
> ```jsx
> import {useEffect} from "react"
> useEffect(() => { /* code */ }, [/* 변수명, 변수명 (Dependancy List) */ ] ) // 해당 변수의 state가 바뀔 때에만 함수 호출
> ```
>
> 만약 Dependancy List가 비어있다면, 코드는 딱 한 번만 실행된다.  
  
### cleanUp function
> 특정 component가 소멸될 때 호출되는 함수를 만들 수 있다.
> useEffect 함수에서 return문에 해당된다.
>
>
> ```jsx
>function Hello(){
>  useEffect( () => {
>    console.log("created");
>    return () => console.log("destroyed"); }) // clean up
>  return <h1>Hello</h1>
> }
> ```
>
>  
  
### React Router
> #### 1) 설치방법
> 
>
> ```sh
> npm install react-router-dom
> ```
>
>
> #### 2) 기본 개념
> Router : URL 기반의 컴포넌트를 보여준다.  
> Routes : 한 번의 하나의 Route만 렌더링 할 때 사용한다.  
> Route  : Router(URL)을 찾은 후 렌더링한다.  
> Link   : 새로고침 없이 페이지 간 이동 가능하도록 한다. (a 태그는 새로고침이 있다.)  
>
> #### 3) 코드 변경
> 기존 코드를 스크린 단위 (Router)로 변경한다.
> Router(Page) = Detail.js, Home.js, Component(Function) = Movie.js  
>
> #### 4) 예시 코드
>
>
> ```jsx:App.js
>import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
> function App() { // router를 render하도록
>  return (
>    <Router>  
>      <Routes>  
>        <Route path="/movie" element={<Detail />} />  
>        <Route path="/" element={<Home />} />  
>      </Routes>  
>    </Router>  
>  );  
>}  
> ```
>
>
> 공식 사이트 튜토리얼 코드를 보려면 [여기](https://reactrouter.com/docs/en/v6/getting-started/tutorial "React Router 공식 홈페이지")를 클릭하세요   

--- 

## 3. ERROR

> **Error 내용**
> ```sh
> ERR_CONNECTION_REFUSED
>
> Package subpath './lib/tokenize' is not defined by "exports"
> ```

     
> **해결방법**  
>
>
> ```js
> npm install -g n
> sudo n stable
> ```
>
>
> 2021.11.01 => 16.13.0 버전 사용

---

> **Error 내용**
>
>
> ```sh
> ./src/App.js
> Attempted import error: './TodoContext' does not contain a default export (imported as 'TodoProvider').
> ```
>
>
> **해결 방법**
> 
>
> ```sh:Movie.js
> export default Movie;
> ```
>
>
> 해당 코드를 입력하고, App.js 에서 import 하면 된다.   
> 만약 위 코드를 쓰지 않았다면, import {Movie} from "./Movie"로 작성해야한다.  
> 즉, import처럼 export 할 때의 선언해주는 문장이다.  