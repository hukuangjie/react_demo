import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// PWA 离线访问
// serviceWorker.unregister();

// JSX语法
// <App /> JS普通对象

// const app = <App />;
// const root = document.getElementById('root');
// const h1 = <h1>Hello World</h1>;

// ReactDOM.render(app, root);


// 实现页面时刻的显示

// function clock() {
//   let time = new Date().toLocaleTimeString()
//   let el = (
//         <div>
//             <h1>现在的时间是{time}</h1>
//             <h2>这是一个副标题</h2>
//         </div>
//   )
//   let root = document.getElementById('root');
//   ReactDOM.render(el,root)
// }

// setInterval(clock,1000)


function Clock(pros) {
  return (
    <div>
      <h1>现在的时间是{pros.date.toLocaleTimeString()}</h1>
      <h2>这是一个函数式组件开发</h2>
    </div>
  )
}

function run() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.querySelector('#root')
  )
}
setInterval(() => {
  run()
}, 1000);