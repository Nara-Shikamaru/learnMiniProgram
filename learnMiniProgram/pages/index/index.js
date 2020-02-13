//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isLoading:false,
    btn_content:"按钮"
  },
  
  handleBtnClick: function(e){
    this.setData({
      isLoading:true,
      btn_content:"加载中"
    })

  },
  getUserInfo: function(e){
    console.log(e.detail.userInfo)
  }
})
