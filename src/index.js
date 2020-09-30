import React from 'react';
import ReactDOM from 'react-dom';
import jsonData from './list-total.json'
import SearchCom from './component/searchCom'
import './06style.css'
// import echarts from 'echarts'
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
// console.log(provinceListSort);
class Bili extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    var dataList = [
      { name: "南海诸岛", value: 0 },
      { name: '北京', value: randomValue() },
      { name: '天津', value: randomValue() },
      { name: '上海', value: randomValue() },
      { name: '重庆', value: randomValue() },
      { name: '河北', value: randomValue() },
      { name: '河南', value: randomValue() },
      { name: '云南', value: randomValue() },
      { name: '辽宁', value: randomValue() },
      { name: '黑龙江', value: randomValue() },
      { name: '湖南', value: randomValue() },
      { name: '安徽', value: randomValue() },
      { name: '山东', value: randomValue() },
      { name: '新疆', value: randomValue() },
      { name: '江苏', value: randomValue() },
      { name: '浙江', value: randomValue() },
      { name: '江西', value: randomValue() },
      { name: '湖北', value: randomValue() },
      { name: '广西', value: randomValue() },
      { name: '甘肃', value: randomValue() },
      { name: '山西', value: randomValue() },
      { name: '内蒙古', value: randomValue() },
      { name: '陕西', value: randomValue() },
      { name: '吉林', value: randomValue() },
      { name: '福建', value: randomValue() },
      { name: '贵州', value: randomValue() },
      { name: '广东', value: randomValue() },
      { name: '青海', value: randomValue() },
      { name: '西藏', value: randomValue() },
      { name: '四川', value: randomValue() },
      { name: '宁夏', value: randomValue() },
      { name: '海南', value: randomValue() },
      { name: '台湾', value: randomValue() },
      { name: '香港', value: randomValue() },
      { name: '澳门', value: randomValue() }
    ]
    dataList = dataList.map((item, index) => {
      if (provinceObj[item.name]) {
        item.value = provinceObj[item.name].confirm
      } else {
        item.value = 0
      }
      return item
    })
    var myChart = window.echarts.init(document.getElementById('map'));
    function randomValue() {
      return Math.round(Math.random() * 1000);
    }
    let option = {
      tooltip: {
        formatter: function (params, ticket, callback) {
          return params.seriesName + '<br />' + params.name + '：' + params.value
        }//数据格式化
      },
      visualMap: {
        min: 0,
        max: 1500,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],//取值范围的文字
        inRange: {
          color: ['#F5DEB3', '#800000']//取值范围的颜色
        },
        show: true//图注
      },
      geo: {
        map: 'china',
        roam: false,//不开启缩放和平移
        zoom: 1.23,//视角缩放比例
        label: {
          normal: {
            show: true,
            fontSize: '10',
            color: 'rgba(0,0,0,0.7)'
          }
        },
        itemStyle: {
          normal: {
            borderColor: 'rgba(0, 0, 0, 0.2)'
          },
          emphasis: {
            areaColor: '#F3B329',//鼠标选择区域颜色
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 20,
            borderWidth: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      series: [
        {
          name: '确诊人数',
          type: 'map',
          geoIndex: 0,
          data: dataList
        }
      ]
    };
    myChart.setOption(option);
    myChart.on('click', function (params) {
      alert(params.name);
    });
  }
  render() {
    return (
      <div>
        <div className="map">
          <h1>地图</h1>
          <div id="map"></div>
        </div>
        <SearchCom provinceObj={provinceObj} />
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
                <li key={index}>
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