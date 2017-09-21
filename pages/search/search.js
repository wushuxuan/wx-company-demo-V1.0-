// pages/search/search.js

var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Carnumber: [
      '京', '津', '沪', '渝', '冀', '晋',
      '蒙', '辽', '吉', '黑', '苏', '浙',
      '皖', '闽', '赣', '鲁', '豫', '鄂',
      '湘', '粤', '桂', '琼', '川', '贵',
      '云', '藏', '陕', '甘', '青', '宁','新'
      ],
    index:2,

  },

  //表单提交
  formSubmit: function (options) {
    console.log('form发生了submit事件，携带数据为：', options.detail.value)
    

      /*检查是否为空*/ 
    if (options.detail.value.CarNumber.length == 0 || options.detail.value.Enginenumber.length == 0 || options.detail.value.VINnumber.length == 0){
      wx.showToast({
        title: '请检查所填写内容，不能为空',
        icon: 'loading',
        duration: 1500
      })
    }


    var that = this
      
      wx.request({
      url: 'https://gc2.diuber.com/diuber/wx_mini_app/getViolation',
        method: 'POST',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          key: 'diuber2017',
          secret_key: '09e8b1b88e615f0d9650886977af33e9',
         // picker: this.data.Music[options.detail.value],
          license_plate_no: that.data.Carnumber[options.detail.value.picker] + options.detail.value.CarNumber,
          engine_number: options.detail.value.Enginenumber,
          frame_number: options.detail.value.VINnumber,
        },
        success: function (res) {

          list:res.data.info
          
          if(res.data.info.count==0){
            wx.navigateTo({
            url: '../endorsement/endorsement?count=' + 0
              + '&totalprice=' + 0
              + '&totalscore=' + 0
            + '&CarNumber=' + that.data.Carnumber[options.detail.value.picker] + options.detail.value.CarNumber
            })
          }else{

                /*跳转页面*/
                wx.navigateTo({
                  url: '../endorsement/endorsement?time=' + res.data.info.list[0].time
                  + '&address=' + res.data.info.list[0].address
                  + '&content=' + res.data.info.list[0].content
                  + '&price=' + res.data.info.list[0].price
                  + '&score=' + res.data.info.list[0].score
                  + '&handlefee=' + res.data.info.list[0].handlefee
                  + '&CarNumber=' + that.data.Carnumber[options.detail.value.picker] + options.detail.value.CarNumber
                  + '&count=' + res.data.info.count
                  + '&totalprice=' + res.data.info.totalprice
                  + '&totalscore=' + res.data.info.totalscore
                })
            }
              console.log(res.data.info.list[0])
          }
        
      })

  },


  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },


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