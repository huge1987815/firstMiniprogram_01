//导入数据
import{postList} from "../../data/data";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.pid);
    const postData=postList[options.pid];
    console.log(postData);
    this.setData({
      postData
    })
  },
  //音乐播放
  onMusic(event){
      const mgr=wx.getBackgroundAudioManager();
      mgr.src=postList[0].music.url;      
      mgr.title=postList[0].music.title;
      console.log(postList[0].music.url);
      console.log(postList[0].music.title);
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