// company/pages/SearchMore/SearchMore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    

   /* time:'2017/9/20',
    time_value:'0',
    money:'罚款金额',
    money_value:'200',
    service:'服务费',
    service_value:'28',
    address:'上海市浦东新区杨南路455号',
    decir:'机动车违反规定停放， 临时停放，驾驶人不在现场或者虽在现场但驾驶人拒绝立即驶离，妨碍其他车辆，行人通行的',
*/
   /* list:[
      {
        name:'违章',
        value:'1条',
      },
      {
        name: '罚',
        value: '200元',
      },
      {
        name: '扣',
        value: '0分',
      },
    ]*/
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


      address: options.address,
      content: options.content,
      price: options.price,
      score: options.score,
      handlefee: options.handlefee,
      time: options.time,
    });
    /*所查数据放到Storage里*/
    wx.setStorageSync('carNumber', options.CarNumber),
      wx.setStorageSync('Count', options.count),
      wx.setStorageSync('Totalprice', options.totalprice),
      wx.setStorageSync('Totalscore', options.totalscore),
      wx.setStorageSync('Time', options.time),
      wx.setStorageSync('Address', options.address),
      wx.setStorageSync('Price', options.price),
      wx.setStorageSync('Score', options.score),
      wx.setStorageSync('Handlefee', options.handlefee),
      wx.setStorageSync('Content', options.content)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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