// company/pages/endorsement/endorsement.js
var app = getApp();
var that;  
Page({

  /**
   * 页面的初始数据
   */
  data: {

    service: [
      {
        image: '../../images/安全.png',
        title: '安全',
        decei:'官方合作办理'
      },
      {
        image: '../../images/精准.png',
        title: '精准',
        decei: '交管局数据'
      },
      {
        image: '../../images/快速.png',
        title: '快速',
        decei: '官方办理渠道'
      },
    ],


  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ 
      CarNumber: options.CarNumber, 
      count: options.count,
      totalprice: options.totalprice,
      totalscore: options.totalscore,
      time: options.time,
      address: options.address,
      content: options.content,
      price: options.price,
      score: options.score,
      handlefee: options.handlefee,
      });



      /*记录上一次的查询结果*/ 
     
    that = this;
    //获取存储信息
    wx.getStorage({
      key: 'carNumber',
      success: function (res) {that.setData({carNumber: res.data})}
})
    wx.getStorage({
      key: 'Count',
      success: function (res) { that.setData({ Count: res.data }) }
    })
    wx.getStorage({
      key: 'Totalprice',
      success: function (res) { that.setData({ Totalprice: res.data }) }
    })
    wx.getStorage({
      key: 'Totalscore',
      success: function (res) { that.setData({ Totalscore: res.data }) }
    })
    wx.getStorage({
      key: 'Time',
      success: function (res) { that.setData({ Time: res.data }) }
    })
    wx.getStorage({
      key: 'Content',
      success: function (res) { that.setData({ Content: res.data }) }
    })
    wx.getStorage({
      key: 'Address',
      success: function (res) { that.setData({ Address: res.data }) }
    })
    wx.getStorage({
      key: 'Price',
      success: function (res) { that.setData({ Price: res.data }) }
    })
    wx.getStorage({
      key: 'Score',
      success: function (res) { that.setData({ Score: res.data }) }
    })
    wx.getStorage({
      key: 'Handlefee',
      success: function (res) { that.setData({ Handlefee: res.data }) }
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})