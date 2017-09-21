// pages/carType/carType.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['不限', '经济型', '商务型', '豪华型','SUV', '6至15座商务', '个性车','电动车'],
    price: ['由高到低', '由低到高'],
    index: 0,


    showcar: [
      {
        image: '../../images/car/show/renting/01.jpg',
        name: '别克凯越',
        keyword: '别克|2017新款|商务',
        price: '¥ 800',
        button: '热门车',
        button2: '新车型'
      },
      {
        image: '../../images/car/show/renting/02.jpg',
        name: '雪佛兰爱唯欧',
        keyword: '自动挡 5座 三厢 / 1.4L',
        price: '¥ 900',
        button: '热门车',
        button2: '新车型'
      },
      {
        image: '../../images/car/show/renting/03.jpg',
        name: '雪佛兰景程',
        keyword: '自动挡 5座 三厢 / 1.4L',
        price: '¥ 1500',
        button: '热门车',
        button2: '新车型'
      },
      {
        image: '../../images/car/show/renting/04.jpg',
        name: '雪佛兰新赛欧',
        keyword: '自动挡 5座 三厢 / 1.4L',
        price: '¥ 1100',
        button: '热门车',
        button2: '新车型'
      },
      {
        image: '../../images/car/show/renting/05.jpg',
        name: '雪铁龙爱丽舍',
        keyword: ' 自动挡 5座 三厢 / 1.4L',
        price: '¥ 1500',
        button: '热门车',
        button2: '新车型'
      },
      {
        image: '../../images/car/show/renting/06.jpg',
        name: '起亚K2',
        keyword: '自动挡 5座 三厢 / 1.4L',
        price: '¥ 650',
        button: '热门车',
        button2: '新车型'
      },
      {
        image: '../../images/car/show/renting/07.jpg',
        name: '雪佛兰科鲁兹',
        keyword: '别克|2017新款|商务',
        price: '¥ 800',
        button: '热门车',
        button2: '新车型'
      },
      {
        image: '../../images/car/show/renting/08.jpg',
        name: '大众斯柯达昕锐',
        keyword: '别克|2017新款|商务',
        price: '¥ 800',
        button: '热门车', 
        button2: '新车型'
      },
    ]
  },
  //表单提交
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },


  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
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