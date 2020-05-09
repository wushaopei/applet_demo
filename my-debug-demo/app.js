//app.js
App({
  onLaunch: function (options) {
    debugger;
    console.log("触发onLaunch")
  },
  onShow: function (options) {
    debugger;
    console.log("触发onShow")
  },
  onHide: function () {
    debugger;
    console.log("触发onHide")
  },
  onError: function (msg) {
    debugger;
    console.log(msg)
  },
  globalData: 'I am global data',
  courseName: "小程序实战"
})