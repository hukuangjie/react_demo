import React from 'react';
import ReactDOM from 'react-dom';

function UserGreet(props) {
    return (
        <h1>欢迎登陆</h1>
    )
}

function UserLogin(props) {
    return (
        <h1>请先登陆</h1>
    )
}

class ParentCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: true
        }
    }
    render() {
        let el = null
        if (this.state.isLogin) {
            el = (<UserGreet />)
        } else {
            el = (<UserLogin />)
        }
        return (
            <div>
                <h1>这是头部</h1>
                {el}
                <h1>这是三元运算符的操作</h1>
                {this.state.isLogin ? <UserGreet /> : <UserLogin />}
                <h1>这是尾部</h1>
            </div>
        )
    }
}

ReactDOM.render(<ParentCom />, document.getElementById('root'))