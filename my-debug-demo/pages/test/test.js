

Page({
  data: {
    mytext: '这是第一个 test页面',
    color: "green"
  },
  onLoad: function () {
    console.log("触发onLoad")
    // other.js
    var appInstance = getApp()
    console.log(appInstance.courseName) // I am global data
    this.setData({
      mytext: appInstance.courseName
    });
  },
  onReady: function (options) {
    console.log("触发onReady")
  },
  onShow: function (options) {
    console.log("触发onShow")
  },
  onHide: function () {
    console.log("触发onHide")
  },
  onUnload: function(){
    console.log("触发onUnload")
  },
  clickMe: function(){
    wx.redirectTo({
      url: '../imooc/imooc'
    })
   // wx.navigateTo({
      //url: "../imooc/imooc"
   // })
  }
})
