

Page({
  data: {
    mytext: '这是第一个 test页面',
    color: "green"
  },
  onLoad:function (){
    // other.js
    var appInstance = getApp()
    console.log(appInstance.courseName) // I am global data
    this.setData({
      mytext: appInstance.courseName
    });
  }
})
