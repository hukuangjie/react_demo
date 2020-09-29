import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    // 状态(数据) --> view
    // 构造函数初始化数据,将需要改变的数据初始化到state中
    this.state = {
      time: new Date().toLocaleTimeString()
    }
    console.log(this.state.time);
  }
  render() {
    //  console.log('会调用渲染函数');
    return (
      <div>
        <h1>当前时间: {this.state.time}</h1>
      </div>
    )
  }

  // 生命周期函数,组件渲染完成时的函数
  componentDidMount() {
    setInterval(() => {
      // 切勿直接修改state数据,直接state重新渲染内容,需要使用setState
      // 通过this.setState修改完数据中,并不会立即修改DOM中的内容,react会在这个函数内容所有设置状态改变后,统一对比虚拟DOM对象,然后再统一修改,提升性能
      console.log(this.state.time);
      this.setState({
        time: new Date().toLocaleTimeString()
      })
      console.log(this.state.time);
    }, 1000);
  }
}

ReactDOM.render(<Clock />, document.getElementById('root'))