// pages/ShowCar/ShowCar.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/car/show/01.jpg',
      '../../images/car/show/02.jpg',
      '../../images/car/show/04.jpg',
    ],
    is_dots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    swiper_data_num: 0,
    swiperCurrent: 0,
    swiper_style: 1,

    detail:[{
      key:'4.5万公里',
      word:'行程里程'
    }, {
      key: '2012-10-10',
      word: '上牌时间'
      }, {
        key: '上海',
        word: '车牌所在地'
    }, {
      key: '国四',
      word: '排放标准'
    },
    {
      key: '自动',
      word: '变速箱'
    },
    {
      key: '2L',
      word: '排量'
    },
    ],


    car_details:[
       {
        name: '别克GL8',
        price:'¥ 800',
        keyword: '别克|2017新款|商务',
       }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ 
      swiper_data_num: this.data.imgUrls.length,
      title: options.name,
     });
    var s_id = e.currentTarget.id;
    this.setData({ swiper_style: s_id });
  },
  swiperChange: function () {
    this.setData({ swiperCurrent: e.detail.current });

  },


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