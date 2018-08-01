var AppApi = require('../../app-api');
const app = getApp();
Component({
    properties: {
      navigationData: Object,
	    showBack: String,
	    title: String,
	    changeCard: Boolean,
    },
    data: {
        systemInfo: getApp().globalData.systemInfo,
        show_welcome: !1,
	      cardModel: false
    },
    methods: {
        goBack: function() {
            wx.navigateBack({
                delta: 1
            });
        },
        goIndex: function() {
            wx.switchTab({
                url: "/index/index"
            });
        },
        goCards: function() {
            try {
                for (var t = getCurrentPages(), a = 0; a < t.length; a++) if (t[a].route.indexOf("cards/cards") >= 0) return wx.navigateBack({
                    delta: t.length - a - 1
                });
                return wx.navigateTo({
                    url: "/cards/cards"
                });
            } catch (t) {
                wx.navigateTo({
                    url: "/cards/cards"
                });
            }
        },
        showMenu: function() {
            this.setData({
                menu_class: "fadeIn",
                menu_inner_class: "fadeIn-left"
            });
        },
        hideMenu: function() {
            this.setData({
                menu_class: "fadeOut",
                menu_inner_class: "fadeOut-left"
            });
        },
        pageScrollTo: function() {
            wx.pageScrollTo({
                scrollTop: 0,
                duration: 300
            });
        },
	      changeCard:function(){
        	var self = this
		      self.setData({
			      cardModel: !self.data.cardModel
		      })
        },
	      choosed: function (e) {
		      var self = this
        	var cardid = e.currentTarget.dataset.cardinfo.cardid
		      self.setData({
			      currentCard: e.currentTarget.dataset.cardinfo,
			      cardid: cardid,
			      cardModel: false
		      })
		      this.triggerEvent('myevent', { cardInfo:e.currentTarget.dataset.cardinfo});
	      },
	    getCard: function () {
		    var self = this
		    wx.showLoading({
			    title: '加载中',
		    })
		    AppApi.cardList().then(function (res) {
			    wx.hideLoading()
			    console.log(res)
			    if(res.status == 200){
			    	if(res.data.cardList.length == 0 && self.data.title ==''){
					    wx.showModal({
						    title: '',
						    content: '您还没有小宝贝,现在去添加',
						    success: function(res) {
							    if (res.confirm) {
								    wx.switchTab({
									    url: '/pages/card/card?login=true',
									    fail:function(){
										    console.info("跳转失败")
									    }
								    })
							    } else if (res.cancel) {
								    console.log('用户点击取消')
							    }
						    }
					    })
				    }
				    
				    self.setData({
					    cardList: res.data.cardList,
					    currentCard: res.data.cardList[0],
					    cardid: res.data.cardList[0].cardid,
				    })
				    self.triggerEvent('myevent', { cardInfo:res.data.cardList[0]});
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
    },
    attached: function() {
        if (!getApp().globalData.showWelcome && getCurrentPages().length <= 1) {
            var t = getApp().globalData.scene;
            1001 != t && 1005 != t && 1006 != t && 1011 != t && 1012 != t && 1013 != t && 1014 != t && 1020 != t || (this.setData({
                show_welcome: !0
            }), getApp().globalData.showWelcome = !0);
        }
    },
    
    ready: function(t) {
    	  var self = this
	    debugger
    	  if(self.data.changeCard && !app.globalData.openid ){
		      wx.showModal({
			      title: '',
			      content: '您还没有登录,现在去登陆',
			      success: function(res) {
				      if (res.confirm) {
					      wx.switchTab({
						      url: '/pages/mine/mine?login',
						      fail:function(){
							      console.info("跳转失败")
						      }
					      })
				      } else if (res.cancel) {
					      console.log('用户点击取消')
				      }
			      }
		      })
	      }
	      if(self.data.changeCard && app.globalData.openid){
		      self.getCard()
	      }
    	
        
        console.log(26, t, "custom-navigation", this, getCurrentPages());
        var a = this;
        this.data.show_welcome && setTimeout(function() {
            a.setData({
                show_welcome: !1
            });
        }, 1e3);
        // try {
        //     3 == a.data.navigationData.leftBtnGo && a.setData({
        //         user_info: getApp().globalData.userInfo
        //     });
        // } catch (t) {
        //     return !1;
        // }
        wx.loadFontFace({
            family: "din1451alt",
            source: 'url("https://cdn.maoka777.com/din1451alt.ttf")',
            success: function(t) {
                console.log("wx.loadFontFace: din1451alt", t);
            },
            fail: function(t) {
	            console.log("wx.loadFontFace: ", t);
            },
            complete: function(t) {
	            console.log("wx.loadFontFace: ", t);
            }
        });
        
        // this.setData({
	       //  showBack:showBack,
	       //  title:title,
        // })
    }
});