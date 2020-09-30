import React from 'react';
import ReactDOM from 'react-dom';
import jsonData from './list-total.json'
import './06style.css'

// console.log(jsonData);

let provinceObj = {}
let chinaData = []
jsonData.data.areaTree.forEach((item, i) => {
  if (item.name === "中国") {
    chinaData.push(item)
    return
  }
});
chinaData = chinaData[0].children
console.log(chinaData);

chinaData.forEach((item, i) => {
  provinceObj[item.name] = {
    confirm: item.total.confirm,
    suspect: item.total.suspect,
    heal: item.total.heal,
    dead: item.total.dead,
  }
});
let provinceList = []
for (const key in provinceObj) {
  provinceObj[key].province = key
  provinceList.push(provinceObj[key])
}
let provinceListSort = provinceList.sort((a, b) => {
  if (a.confirm > b.confirm) {
    return 1
  } else {
    return
  }
})
console.log(provinceListSort);

class Bili extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>中国病例</h1>
        <ul>
          <li>
            <span>地区</span>
            <span>确诊</span>
            <span>死亡</span>
            <span>治愈</span>
          </li>
          {
            this.props.list.map((item, index) => {
              return (
                <li>
                  <span>{item.province}</span>
                  <span>{item.confirm}</span>
                  <span>{item.dead}</span>
                  <span>{item.heal}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<Bili list={provinceListSort} />, document.getElementById('root'))