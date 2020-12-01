// components/post/index.js
Component({
 /**
  * 组件的属性列表
  */
 properties: {
    res:Object
 },

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   * 组件的开发者不应该决定
   * 点击之后做什么事情 不应该
   * 组件的使用者
   * 自定义事件
   *
   */
  methods: {
      //跳转到文章详情页面
      // onGoToDetail(event){
      //    console.log(event);
      //    const pid=event.currentTarget.dataset.postId;
      //    wx.navigateTo({
      //       url: '/pages/posts-detail/postsDetail?pid='+pid,
      //    })
      // },
      onTap(event){        
         console.log(this.properties.res.postId);
         this.triggerEvent("posttap",{
            pid:this.properties.res.postId
         });
      }
  }
})