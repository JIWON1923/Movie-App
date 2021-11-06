# Movie app

## react 준비하기
node,  npx, npm 설치

```sh
cd Documents
npx create-react-app movieApp
```


자세한 정보는 [여기](https://github.com/facebook/create-react-app "facebook 깃허브")를 클릭하세요.


## Basic React
### component
- HTML을 반환하는 함수
- jsx
- react application은 하나의 component만 렌더링
- 하나의 component는 서로 다른 component들을 포함할 수 있음
- react는 component를 가져와 Browser에 HTML로 표현

### state Function

> 직접 값을 설정하는 방법
>
>
> ```jsx
> const [counter, setCounter] = React.userState(0);
> setCounter(1);
> ```
>
>

> 현재 state로 다음 state 계산하는 방법
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




## ERROR

Error 내용
```sh
ERR_CONNECTION_REFUSED

Package subpath './lib/tokenize' is not defined by "exports"
```

  
***   
node js stable 버전 설치로 해결 


```js
npm install -g n
sudo n stable
```


2021.11.01 => 16.13.0 버전 사용
