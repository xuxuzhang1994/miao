//index.js
//获取应用实例
const app = getApp();
var AppApi = require('../../app-api');
Page({
    data: {},
		onShow : function () {
      this.getCard()
    },
    getCard: function () {
        var self = this
        wx.showLoading({
            title: '加载中',
        })
        AppApi.cardList({
          userid:app.globalData.userInfo.userid
        }).then(function (res) {
            wx.hideLoading()
	        console.log(res)
            if(res.status == 200){
                self.setData({
	                cardList: res.data.cardList
                })
            }else {
                wx.showToast({
                    title: res.message,
                    icon: 'success',
                    duration: 2000
                });
            }
        },function (res) {
            wx.hideLoading();
        });
    },
	  addCard: function () {
		  wx.navigateTo({
			  url: '/pages/add-card/add-card'
		  })
	  }
})
