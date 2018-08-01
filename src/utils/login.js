var app = getApp();
let AppApi = require('../app-api')

var login = function () {
	wx.checkSession({
		success: function() {
			if(sessid){
				loginRefash()
			}else {
				wx.getSetting({
					success: function(res){
						if (res.authSetting['scope.userInfo']) {
							// 已经授权，可以直接调用 getUserInfo 获取头像昵称
							wx.getUserInfo({
								success: function(res) {
									login(res)
								}
							})
						}
					}
				})
			}
		},
		fail: function() {
			console.log("session_key 已经失效，需要重新执行登录流程")
			login()
		}
	});
	var sessid = wx.getStorageSync("sessid")
	
}
function login(data){
	wx.login({
		success: function(res) {
			console.log('xxx')
			if (res.code) {
				app.globalData.jscode = res.code;
				AppApi.login({
					js_code:res.code,
					signature:data.signature,
					rawData:data.rawData,
					encryptedData:data.encryptedData,
					iv:data.iv,
				}).then(function (res) {
					if(res.status == 200){
						app.globalData.userInfo = res.data.userinfo;
						app.globalData.openid = res.data.openid;
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
}
function loginRefash(){
	AppApi.loginrefash().then(function (res) {
		if(res.status == 200){
			app.globalData.userInfo = res.data.userinfo;
			app.globalData.openid = res.data.openid;
		}
	},function (res) {
		wx.hideLoading();
	});
}

module.exports = {
	login: login()
}