import React from 'react';
import ReactDOM from 'react-dom';
function ListItem(props) {
    return (
        <li>
            <h3>{props.index + 1}:{props.data.title}</h3>
            <p>{props.data.content}</p>
        </li>
    )
}

class ListItem2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li onClick={(e) => {
                this.clickEvent(this.props.index, this.props.data.title, e)
            }}>
                <h3>{this.props.index + 1}:{this.props.data.title}</h3>
                <p>{this.props.data.content}</p>
            </li>
        )
    }
    clickEvent = (index, title, event) => {
        alert(index + '-' + title)
    }
}

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    title: "第一节课 React 事件",
                    content: "事件内容"
                }, {
                    title: "第一节课 React 数据传递",
                    content: "数据传递"
                }, {
                    title: "第一节课 React 条件渲染",
                    content: "条件渲染"
                }
            ]
        }
    }

    render() {
        let listArr = this.state.list.map((item, index) => {
            return (
                <ListItem2 key={index} data={item} index={index} />
                // <li key={index}>
                //     <h3>{index}{item.title}</h3>
                //     <p>{item.content}</p>
                // </li>
            )
        })
        console.log(listArr);
        return (
            <div>
                <h1>
                    今天课程内容
               </h1>
                <ul>
                    {listArr}
                    <li>
                        <h3>这是标题</h3>
                        <p>内容</p>
                    </li>
                </ul>
                <h1>复杂没有用组件完成列表</h1>
                {
                    this.state.list.map((item, index) => {
                        return (
                            <li key={index} onClick={(e) => {
                                this.clickFn(index, item.title, e)
                            }}>
                                <h3>{index + 1}+"复杂"+{item.title}</h3>
                                <p>{item.content}</p>
                            </li>
                        )
                    })
                }
            </div>
        )
    }
    clickFn = (index, title, event) => {
        alert(index + '-clickFn' + title)
    }
}

ReactDOM.render(<Welcome />, document.getElementById('root'))