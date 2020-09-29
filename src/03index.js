import React from 'react';
import ReactDOM from 'react-dom';
import './04style.css'

let exampleStyle = {
  background: 'skyblue',
  borderBottom: '5px solid red'
}

let el = (
  <div>
    <h1 style={exampleStyle}>hello world</h1>
  </div>
)



let classStr = 'redBg2'
let classStr1 = ['redBg2', 'abv'].join(' ')

let el2 = (
  <div>
    {/**
      <h2>111</h2>
     */}
    <h1 className={classStr1}>hello world</h1>
  </div>
)


ReactDOM.render(
  el2,
  document.getElementById('root')
)
