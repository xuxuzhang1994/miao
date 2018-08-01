let AppApi = require('../../app-api')
var app = getApp();
Page({
	data: {
		canIUse: wx.canIUse('button.open-type.getUserInfo')
	},
	onShow: function() {
		var self = this
		self.setData({
			userInfo:app.globalData.userInfo
		})
		if(!self.data.userInfo){
			wx.getUserInfo({
				success: function(res) {
					self.login(res)
				}
			})
			
		}
		// // 查看是否授权
		// wx.getSetting({
		// 	success: function(res){
		// 		console.log(res)
		// 		if (res.authSetting['scope.userInfo']) {
		// 			// 已经授权，可以直接调用 getUserInfo 获取头像昵称
		// 			wx.getUserInfo({
		// 				success: function(res) {
		// 					console.log(res.userInfo)
		// 				}
		// 			})
		// 		}
		// 	}
		// })
	},
	bindGetUserInfo: function(e) {
		let self = this;
		if(e.detail.signature){
			// 用户信息授权成功
			self.login(e.detail)
		}
	},
	login:function(data){
		console.log(data)
		var self = this
		wx.login({
			success: function(res) {
				console.log('xxx')
				if (res.code) {
					AppApi.login({
						js_code:res.code,
						signature:data.signature,
						rawData:data.rawData,
						encryptedData:data.encryptedData,
						iv:data.iv,
					}).then(function (res) {
						if(res.status == 200){
							app.globalData.userInfo = res.data.userinfo;
							wx.setStorageSync("sessid", res.data.sessid)
						}
					},function (res) {
						wx.hideLoading();
					});
				} else {
					console.log('登录失败！' + res.errMsg)
				}
			}
		});
	},
	goRecord: function () {
		wx.navigateTo({
			url: "/pages/exchange-record/exchange-record?id=1"
		});
	}
})