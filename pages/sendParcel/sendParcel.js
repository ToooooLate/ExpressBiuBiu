// pages/sendParcel/sendParcel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperItem: [{
      "text":'你愁啥',
      "imgUrl":'../../asset/img/02.jpg'
    },{
      "text":'瞅你咋的',
      "imgUrl":'../../asset/img/03.jpg'
    },{
      "text":'你瞅就你瞅',
      "imgUrl":'../../asset/img/04.jpg'
    }],
    gridArr:[{
      "text": "专属寄件",
      "iconName": "comment",
      "subText": "下单给专属快递员",
      "title": "指定快递员"
    },{
      "text": "驿站自寄",
      "iconName": "cart",
      "subText": "去附近驿站自寄",
      "title": ""
    },{
      "text": "批量寄件",
      "iconName": "order",
      "subText": "便捷寄多个快递",
      "title": ""
    },{
      "text": "寄国际件",
      "iconName": "address",
      "subText": "国际寄件，通达全球",
      "title": ""
    },{
      "text": "丰巢寄件",
      "iconName": "checked",
      "subText": "24小时自助寄件",
      "title": "夜间特惠"
    },{
      "text": "邀请寄件",
      "iconName": "like",
      "subText": "好友填写收件地址",
      "title": ""
    }],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})