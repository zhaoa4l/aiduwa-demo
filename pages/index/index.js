/* index.js
 * 获取应用实例
 */
var data = require("../data/index.js");
var app = getApp();
Page({
  data: {
    // swiper配置
    swiperConfig: {
      banners: [
        {
          "link": "",
          "url": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
        }, {
          "link": "",
          "url": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"
        }, {
          "link": "",
          "url": "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
        }
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000
    },
    // 年级
    grades: [
      {
        value: 0,
        text: '全部'
      },{
        value: 1,
        text: '一年级'
      },{
        value: 2,
        text: '二年级'
      },{
        value: 3,
        text: '三年级'
      },{
        value: 4,
        text: '四年级'
      }, {
        value: 5,
        text: '五年级'
      }, {
        value: 6,
        text: '六年级'
      }
    ],
    books: data.books,
    tabValue: 0,
    gradeValue: 0
  },
  selectTab: function(e){
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 500)
    this.setData({
      tabValue: parseInt(e.currentTarget.dataset.value),
      gradeValue: 0
    })
  },
  selectGrade: function(e){
    wx.showLoading({
      title: '加载中',
    })
    let gradeValue = parseInt(e.currentTarget.dataset.value)
    let books = gradeValue > 0 ? data.books.slice(--gradeValue * 5, gradeValue * 5 + 5) : data.books
    this.setData({
      gradeValue: parseInt(e.currentTarget.dataset.value),
      books: books
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 300)
  },
  onShow: function () {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  }
})
