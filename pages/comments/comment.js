// pages/comments/comment.js
const contents = [
  {
    name: "王小明(三年二班)",
    content: "很好非常好，推荐推荐特别推荐！读书就是这么有趣。谢谢爱读娃，谢谢妈妈为我借阅这本书~~ 棒棒哒！",
    img: 3
  },
  {
    name: "王萌萌(三年二班)",
    content: "鲁宾逊漂流记我看完啦！推荐给大家，我超级喜欢~",
    img: 2
  },
  {
    name: "李壕(三年一班)",
    content: "谢谢老师为我选的这本《你很特别》，我觉得我找到开心的意义喽！！你也看看吧~~",
    img: 0
  },
  {
    name: "林小林(三年三班)",
    content: "赠棒赠帮炒鸡棒的纳尼亚传奇，I like it~ Come on baby~~",
    img: 3
  },
  {
    name: "楚小小(三年三班)",
    content: "嘿嘿嘿！不出一个月我就把这本安徒生童话看完了~~  我是个拇指姑娘，哈哈哈~~",
    img: 0
  },
  {
    name: "王歌(三年五班)",
    content: "谢谢读书娃！我是读书娃，哈哈哈~ 《格林童话》真的太棒了~",
    img: 0
  }
];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    comments: [
      {
        text: "全部评价",
        nums: "6500"
      },
      {
        text: "有图",
        nums: "1500"
      },
      {
        text: "好评",
        nums: "6490"
      },
      {
        text: "中评",
        nums: "1"
      },
      {
        text: "差评",
        nums: "0"
      },
    ],
    contents: contents,
    status: 0
  },
  changeStatus: function (e) {
    wx.showLoading({
      title: '加载中',
    })
    let status = e.currentTarget.dataset.index;
    let newContents = contents.filter(function(item, i){
      if (status === 0){
        return true
      } else if (status === 1){
        return item.img > 0
      } else if (status === 2){
        return item.img === 0
      } else if (status === 3){
        return i === 3
      }
      return false
    })
    this.setData({
      status: status,
      contents: newContents.reverse()
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 300)
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