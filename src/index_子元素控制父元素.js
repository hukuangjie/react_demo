import React from 'react';
import ReactDOM from 'react-dom';

class ParentCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            childData: null,
        }
        this.setChildData = this.setChildData.bind(this)
    }

    render() {
        return (
            <div>
                <h1>子元素传递给父元素的数据:{this.state.childData}</h1>
                <ChildCom setChildData={this.setChildData} />
            </div>
        )
    }
    setChildData(data) {
        this.setState({
            childData: data
        })
    }
}

class ChildCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'hello world'
        }
        this.sendData = this.sendData.bind(this)
    }
    sendData() {
        // console.log(this.state.msg);
        // 将子元素传递给到父元素,实际就是调用父元素传递进来的父元素函数
        this.props.setChildData(this.state.msg)
    }
    render() {
        return (
            <div>
                <button onClick={this.sendData}>传递helloworld给父元素</button>

                <button onClick={() => {
                    this.props.setChildData("直接调用props函数")
                }}>传递helloworld给父元素</button>
            </div>
        )
    }

}
ReactDOM.render(<ParentCom />, document.getElementById('root'))