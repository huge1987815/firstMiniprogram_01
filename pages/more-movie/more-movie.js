// pages/more-movie/more-movie.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    _type:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const type=options.type;  
    this.data._type=type;  
    //正在热映
    wx.request({
      url: app.gBaseUrl+type,
      method:"get",//默认是get提交可以不写，在这里只能用get提交方式传数据
      data:{
         start:0,
         count:12
      },
      success:(res)=>{
        console.log(res);  
        this.setData({
          movies:res.data.subjects
        });          
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data._type);
    var _title="";
    switch(this.data._type){
        case "in_theaters":
          _title="正在热映";
          break;
        case "coming_soon":
          _title="即将上映";
          break;
        case "top250":
          _title="豆瓣Top250";
          break;
    }
    console.log(_title);
    wx.setNavigationBarTitle({
      title:_title,
    })
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
    //当网络不好的时候，使用正在加载状态
    wx.showNavigationBarLoading();
    //正在热映
    wx.request({
      url: app.gBaseUrl+this.data._type,
      method:"get",//默认是get提交可以不写，在这里只能用get提交方式传数据
      data:{
         start:this.data.movies.length,
         count:12
      },
      success:(res)=>{
        console.log(res);  
        this.setData({
          movies:this.data.movies.concat(res.data.subjects)
        });    
        //加载完了，就隐藏加载图标
        wx.hideNavigationBarLoading();      
      }
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})