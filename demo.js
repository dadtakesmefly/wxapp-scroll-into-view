var order = ['green', 'red', 'yellow', 'blue']
Page({
  data: {
    toView: 'red',
    scrollTop: 0,
    height: 0
  },
  onLoad: function (e) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowHeight);
        that.setData({
          height: res.windowHeight,
          toView: "green"
        })
        console.log(that.data.height);

      },
    })
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    console.log(e.currentTarget.dataset.view)
    for(let i = 0; i < order.length;i++){
      if (order[i] === e.currentTarget.dataset.view) {
        this.setData({
          toView: order[i]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})