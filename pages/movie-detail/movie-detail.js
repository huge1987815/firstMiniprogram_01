// pages/movie-detail/movie-detail.js
import {converToCastsString,convertToCastInfos} from "../../utils/util.js";
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options.mid);
      const mid=options.mid;
      wx.request({
        url: app.gBaseUrl+'subject/'+mid,
        success:(res)=>{
          console.log(res);
          this.processMovieData(res.data);
          // this.setData({
          //   movie:res.data
          // });
        }
      })
  },
  //处理电影数据
  processMovieData(movie){
    console.log(converToCastsString(movie.directors));
    console.log(converToCastsString(movie.casts));
    //写一个变量
    const data={};
    data.title=movie.title;
    data.image=movie.images.large;
    data.directors=converToCastsString(movie.directors);
    data.casts=converToCastsString(movie.casts);
    data.subtitle=movie.countries[0]+'.'+movie.year;
    data.wishcount=movie.wish_count;
    data.commentscount=movie.comments_count;
    data.originaltitle=movie.original_title;
    data.ratingAverage=movie.rating.average;
    data.genres=movie.genres.join("、");
    data.rating=movie.rating.stars/10;
    data.summary=movie.summary;
    data.castsInfo=convertToCastInfos(movie.casts);
    this.setData({
      movie:data
    });  
  },
  // 实现图片放大效果
  onViewPost(event){
    wx.previewImage({
      urls: [this.data.movie.images.large],
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