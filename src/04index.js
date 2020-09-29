import React from 'react';
import ReactDOM from 'react-dom';

function Childcom(prop) {
  let title = <h2>我是副标题</h2>
  console.log(prop);
  let weather = prop.weather
  let isGo = weather === "下雨" ? "不出门" : "出门"
  return (
    <div>
      <h1>函数式组件hello world</h1>
      {title}

      <div>
        是否出门?
        <span>{isGo}</span>
      </div>
    </div>
  )
}

// 类组件定义
class HelloWorld extends React.Component {
  render() {
    console.log(this); //this.prop.abc === "出太阳"
    return (
      <div>
        <h1>类组件定义Hello World {this.props.name}</h1>
        <Childcom weather={this.props.abc} />
      </div>
    )
  }
}
// ReactDOM.render(
//   <Childcom weather="出太阳" />,
//   document.getElementById('root')
// )


ReactDOM.render(
  <HelloWorld abc="下雨" name='kuang' />,
  document.getElementById('root')
)
