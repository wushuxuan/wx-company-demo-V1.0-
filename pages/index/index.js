//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    top_bg_imag: '../../images/car/01.jpg',
    logo : '../../images/car/bottom.png',

    /*卡片列表超链接的url*/
    carType: '../carType/carType',
    renting: '../Renting/Renting',
    appoint: '../appoint/appoint',
  
  /**功能模块的icon*/
    cardNav:[
      {
        address:'../address/address',
        image:'../../images/icon/icons/地址.png',
        text:'公司地址',
      },
      {
        address: '../service/service',
        image: '../../images/icon/icons/服务.png',
        text: '公司服务',
      },
      {
        address: '../search/search',
        image: '../../images/icon/icons/查询.png',
        text: '违章查询',
      },
      {
        address: '../appointment/appointment',
        image: '../../images/icon/icons/预约.png',
        text: '租车须知',
      }
    ],


      /*车型展示*/
    carType: [
      {
        image:'../../images/car/show/07.jpg',
          name :'奥迪',
          url:'../ShowCar/ShowCar?name={{item.name}}'
      },
      {
        image: '../../images/car/show/08.jpg',
        name: '奔驰维亚诺7座',
        url: '../ShowCar/ShowCar?name={{item.name}}'
      },
      {
        image: '../../images/car/show/03.jpg',
        name: '别克GL8',
        url: '../ShowCar/ShowCar?name={{item.name}}'
      },
      {
        image: '../../images/car/show/04.jpg',
        name: '丰田凯美瑞',
        url: '../ShowCar/ShowCar?name={{item.name}}'
      },
    ],



    /*待租车辆*/
    showcar: [
      {
        image: '../../images/car/show/01.jpg',
        name: '别克GL8',
        keyword: '别克|2017新款|商务',
        price: '¥ 800',
        text:'详细报价'
      },
      {
        image: '../../images/car/show/02.jpg',
        name: '别克商务 MPV',
        keyword: '别克|2017新款|商务',
        price: '¥ 900',
        text: '详细报价'
      },
      {
        image: '../../images/car/show/03.jpg',
        name: '奔驰威霆8座',
        keyword: '奔驰|2017新款|8座s',
        price: '¥ 1500',
        text: '详细报价'
      },
      {
        image: '../../images/car/show/04.jpg',
        name: '奥迪A6L',
        keyword: '奥迪|2017新款|商务',
        price: '¥ 1100',
        text: '详细报价'
      },
      {
        image: '../../images/car/show/05.jpg',
        name: '奔驰维亚诺7座',
        keyword: '奔驰|商务',
        price: '¥ 1500',
        text: '详细报价'
      },
      {
        image: '../../images/car/show/06.jpg',
        name: '丰田凯美瑞',
        keyword: '丰田|2017新款|商务',
        price: '¥ 650',
        text: '详细报价'
      },
      {
        image: '../../images/car/show/07.jpg',
        name: '别克GL8豪华商务2017新款',
        keyword: '别克|2017新款|商务',
        price: '¥ 800',
        text: '详细报价'
      },
      {
        image: '../../images/car/show/08.jpg',
        name: '别克GL8豪华商务2017新款',
        keyword: '别克|2017新款|商务',
        price: '¥ 800',
        text: '详细报价'
      },
    ]
  },



  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
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


  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },



    //顶部栏的转发
  onShareAppMessage: function () {
    return {
      title: '嘀友管车小程序',
      path: '/page/user?id=123'
    }
  },
})
