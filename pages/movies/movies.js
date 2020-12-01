// pages/movies/movies.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //设置正在热映变量
    inTheaters:[],
    comingSoon:[],
    top250:[],
    searchResult:false,
    searchData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //访问http服务器端数据
    //正在热映
    wx.request({
      url: app.gBaseUrl+'in_theaters',
      method:"get",//默认是get提交可以不写，在这里只能用get提交方式传数据
      data:{
        start:0,
        count:3
      },
      success:(res)=>{
        console.log(res);  
        this.setData({
          inTheaters:res.data.subjects
        });          
      }
    });
    //即将上映
    wx.request({
      url: app.gBaseUrl+'coming_soon',
      method:"get",
      data:{
        start:0,
        count:3
      },
      success:(res)=>{
        console.log(res);  
        this.setData({
          comingSoon:res.data.subjects
        });          
      }
    })
    //豆瓣Top250
    wx.request({
      url: app.gBaseUrl+'top250',
      method:"get",
      data:{
        start:0,
        count:3
      },
      success:(res)=>{
        console.log(res);  
        this.setData({
          top250:res.data.subjects
        });          
      }
    })
  },

  //跳转到更多电影页面
  onGoToMovie(event){
    console.log(event);
    const type=event.currentTarget.dataset.type;
    console.log(type);
    wx.navigateTo({
      url: '/pages/more-movie/more-movie?type='+type,
    })
  },
  //实现电影搜索栏搜索
  onConfirm(event){
    //面板切换
    this.setData({
      searchResult:true
    });
    console.log(event);
    wx.request({
      url: app.gBaseUrl+'search',
      data:{
        q:event.detail.value
      },
      success:(res)=>{
        console.log(res);
        this.setData({
          searchData:res.data.subjects
        });
      }
    })
  },

  //实现电影搜索点击取消功能回到电影首页
  onSearchCancel(){
    this.setData({
      searchResult:false
    });
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