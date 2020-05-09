// pages/events/events.js
var common = require('../utils/common.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },
  clickMe: function(e){
    console.log("被点击事件触发");
    console.log(e);

    var sex = e.currentTarget.dataset.sex;
    var customdata = e.currentTarget.dataset.customdata;
    var customname = e.currentTarget.dataset.customname;
    console.log(sex + "-- currentTarget");
    console.log(customdata + "-- currentTarget");
    console.log(customname + "-- currentTarget");

    common.sayHello("lee");
    common.sayGoodbye("imooc");
  }
})