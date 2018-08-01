//app.js

App({
  onLaunch: function () {
  	var self = this
    // 展示本地存储能力
	  wx.setEnableDebug({    enableDebug: true})
	  var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
	  
  },
	globalData: {
		userInfo: {},
		AppRecordCard: {},
		AppCardInfo: {
			id: ""
		},
		AppPhotosTemp: {
			type: "",
			temp: [],
			extra: {},
			card_info: {}
		},
		rankingIndex: [],
		ADMIN_OPENIDS: [ "opo4k0UjE5BTcPbRxU9Fg7Pr97SA", "opo4k0Zqo8h6Ue5BTnJX_g_D9uZs", "opo4k0V_QCOqWJlW1sW5q5SZmQ5M", "opo4k0dMUxsOGSPNlQHasSPMB2k8", "opo4k0Xp65munk6a5mDVhNJtV2gQ", "opo4k0dmv7rPN6QzhfdS5yUNmVls" ],
		isAdministrator: !1,
		showWelcome: !1,
		loadFontFace: !1
	},
  // BASE_URL:"http://miao.zjy1994.com/",
  BASE_URL:"http://localhost:2018/",
  // BASE_URL:"http://192.168.1.23:2018/",
	
});