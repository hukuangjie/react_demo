import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
let str = '当前的时间是:'
let time = new Date().toLocaleTimeString()
let element = (
  <div>
    <h1>hello world</h1>
    <h2>{str + time}</h2>
  </div>
)

// let man = "发热"
// let element2 = (
//   <div>
//     <h1>今天是否隔离:</h1>
//     <h2>{man === "发热" ? <button>隔离</button> : "躺床上"}</h2>
//   </div>
// )

let man = "正常"
let element4 = (
  <div>
    <span>横着躺</span>
    <span>竖着躺</span>
  </div>
)
let element3 = (
  <div>
    <h1>今天是否隔离:</h1>
    <h2>{man === "发热" ? <button>隔离</button> : element4}</h2>
  </div>
)
let red= 'bgRed'
let logo ='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
// html的样式类名要写className,因为class是关键词
let element5 = (
  <div className={red}>
    <img src={logo} alt="google" />
    红色的背景颜色
  </div>
)

ReactDOM.render(
  element5,
  document.getElementById('root')
)