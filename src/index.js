import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ComLife extends Component {
  constructor(props) {
    super(props)  //调用Component的构造函数
    this.state = {
      msg: 'hello world'
    }
    console.log('constructor构造函数');
  }
  componentWillMount() {
    console.log('componentWillMount组件将要渲染');
  }
  componentDidMount() {
    console.log('componentDidMount组件渲染完毕');
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps组件将要接收新的state和props');
  }
  componentWillUpdate() {
    console.log("componentWillUpdate将要更新");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount将要移除");
  }
  shouldComponentUpdate() {
    // 如果希望更新就返回真
    console.log('是否需要进行更新');
    if (this.state.msg === "hello world") {
      console.log("true");
      return true
    } else {
      console.log("false");
      return false
    }
  }
  componentDidUpdate() {
    console.log('componentDidUpdate组件更新完毕');
  }
  render() {
    console.log("render渲染");
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.changeMsg}>组件更新</button>
      </div>
    )
  }
  changeMsg = () => {
    this.setState({
      msg: 'hello laohu'
    })
  }
}

class ParentCom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
  }
  removeCom = () => {
    this.setState({
      isShow: false
    })
  }
  render() {
    if (this.state.isShow) {
      return (
        <div>
          <button onClick={this.removeCom}>移除comlifer</button>
          <ComLife />
        </div>
      )
    } else {
      return <h1>将comlife已经移除</h1>
    }
  }
}

ReactDOM.render(
  <ParentCom />,
  document.querySelector("#root")
)