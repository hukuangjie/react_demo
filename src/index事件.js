import React from 'react';
import ReactDOM from 'react-dom';

class ParentCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <form action="http://www.baidu.com">
                    <div className="child">
                        <h1>helloworld</h1>
                        <button onClick={this.parentEvent}>提交</button>
                    </div>
                </form>
                <button onClick={(e) => {
                    this.parentEvent1("msg:helloworld", e)
                }}>提交</button>

            </div>
        )
    }
    parentEvent = (e) => {
        console.log(e);
        e.preventDefault()
        // return false
    }
    parentEvent1 = (msg, e) => {
        console.log(msg);
        console.log(e);
    }
}

ReactDOM.render(<ParentCom />, document.getElementById('root'))