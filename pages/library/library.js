// pages/library.js
var data = require("../data/index.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    items: ['全部', '小学一年级', '小学二年级', '小学三年级', '小学四年级', '小学五年级', '小学六年级'],
    isFocus: false,
    selectGrade: 0,
    selectTab: 0,
    resultIndex: 0,
    showResult: false,
    books: data.books.slice(10, 20)
  },
  search: function(){
    this.setData({
      showResult: true
    })
  },
  cancel: function(){
    this.setData({
      isFocus: !this.data.isFocus,
      showResult: false
    })
  },
  searchFocus: function(){
    this.setData({
      isFocus: true
    })
  },
  selectGrade: function(e){
    this.setData({
      selectGrade: e.currentTarget.dataset.index
    })
  },
  selectResult: function(e){
    wx.showLoading({
      title: '加载中',
    })
    this.setData({
      resultIndex: parseInt(e.currentTarget.dataset.index),
      books: this.data.books.reverse()
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 300)
  },
  selectTab: function(e){
    wx.showLoading({
      title: '加载中',
    })
    this.setData({
      selectTab: parseInt(e.currentTarget.dataset.index)
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 500)
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
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      isFocus: false,
      showResult: false
    })
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