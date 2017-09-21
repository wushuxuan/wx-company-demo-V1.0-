// pages/service/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top_bg_imag: '../../images/address/address.jpg',

    ServiceList:[
      {
        title:'短租自架',
        image:'../../images/services/service/车轮.png',
        notice:'24小时轻松取 / 还车',
        button:'咨询客服'
      },
      {
        title: '长租服务',
        image: '../../images/services/service/记录.png',
        notice: '长租一次告别常租',
        button: '咨询客服'
      },
      {
        title: '企业租车',
        image: '../../images/services/service/企业.png',
        notice: '企业出行一步搞定',
        button: '咨询客服'
      },
      {
        title: '顺风车站',
        image: '../../images/services/service/超速.jpg',
        notice: '价格便宜就是任性',
        button: '咨询客服'
      }
    ]
  },
  //拨打电话
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '13641650994', //此号码并非真实电话号码，仅用于测试
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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