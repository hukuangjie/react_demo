// const fs = require("fs");
const axios = require('axios');
const httpUrl = 'https://c.m.163.com/ug/api/wuhan/app/data/list-total?t=' + new Date().getTime()
axios.get(httpUrl).then((res) => {
    // fs.writeFileSync("data.json", res.data);
    console.log(res.data);
})