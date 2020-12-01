//导入数据
import{postList} from "../../data/data";
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //setData
      //更新
      //创建+更新     

      this.setData({
        postList
      });
  },
  
  //轮播图片跳转到文章详情页面
  onGoToDetailImage(event){
    console.log(event);
    const pid=event.currentTarget.dataset.postId;
    wx.navigateTo({
      url: '/pages/posts-detail/postsDetail?pid='+pid,
    })
  },
  
  //跳转到文章详情页面
  onGoToDetail(event){
    console.log(event);
    const pid=event.detail.pid;
    wx.navigateTo({
      url: '/pages/posts-detail/postsDetail?pid='+pid,
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