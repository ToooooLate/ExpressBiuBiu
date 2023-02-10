// pages/sendPackages/sendPackages.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "sendName":"请填写寄件人姓名",
    "sendNum":"",
    "sendAddress":"请填写寄件人地址",
    "receiveName":"请填写收件人姓名",
    "receiveNum":"",
    "receiveAddress":"请填写收件人地址",
    "rulesAccept": false,
    "rulesDisable": true,
    "rulesShow": false,
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

  },

  changeTabs(){

  },

  checkedRules(){
    this.setData({"rulesAccept" : ! this.data.rulesAccept})
  },

  readRules(){
    this.setData({
      "rulesShow":true
    })
  },
  acceptRules(){
    this.setData({
      "rulesShow":false,
      "rulesDisable":false,
      "rulesAccept":true
    })
  }
})