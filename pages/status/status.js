// pages/status/status.js
var data = require("../data/index.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    books: [
      {
        checked: true
      },
      {
        checked: true
      },
      {
        checked: true
      }
    ],
    status: 0,
    books: data.books,
    statusBooks:[
      data.books.slice(0, 3),
      data.books.slice(3, 5),
      data.books.slice(5, 7),
      data.books.slice(8, 9),
      data.books.slice(9, 10)
    ]
  },
  changeStatus: function(e){
    this.setData({
      status: e.currentTarget.dataset.index
    })
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 200)
  },
  toggleCheck: function(e){
    let i = e.currentTarget.dataset.index
    this.data.books[i].checked = !this.data.books[i].checked
  },
  comment: function(e){
    wx.navigateTo({
      url: "/pages/comments/add"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    options.query && this.setData({
      status: parseInt(options.query)
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