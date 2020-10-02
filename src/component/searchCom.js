import React, { Component } from 'react'

class SearchCom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            result: ''
        }
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.changeEvent} onKeyDown={this.searchEvent} value={this.state.value} placeholder="请输入查询的省份" />
                <div>
                    <h2>查询结果:</h2>
                    <div>
                        {this.state.result}
                    </div>
                </div>
            </div>
        )
    }
    searchEvent = (e) => {
        if (e.keyCode === 13) {
            // console.log(e.keyCode);
            console.log(e.target.value);
            if (!this.props.provinceObj[e.target.value]) {
                this.setState({
                    result: <h2>输入错误,不是省份</h2>
                })
            } else {
                this.setState({
                    result: (
                        <div>
                            <div>确诊人数:{this.props.provinceObj[e.target.value].confirm}</div>
                            <div>死亡人数:{this.props.provinceObj[e.target.value].dead}</div>
                            <div>治愈人数:{this.props.provinceObj[e.target.value].heal}</div>
                        </div>
                    )
                })
            }

        }
    }

    changeEvent = (e) => {
        this.setState({
            value: e.target.value
        })
    }
}
export default SearchCom