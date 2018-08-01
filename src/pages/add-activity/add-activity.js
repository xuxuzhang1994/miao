//index.js
//获取应用实例
const app = getApp();
var AppApi = require('../../app-api');

var staticText={
    title:"员工登陆",
    user:"请输入手机号",
    password:"请输入密码",
    tip:"联系管理员"
};

Page({
    data: {
        staticText:staticText,
        account:"18356061234",
        password:"123456",
        focus: false,
    },

    //获取用户输入的用户名
    accountInput:function(e)
    {
        this.setData({
            account: e.detail.value
        });
    },
    passwordInput:function(e)
    {
        this.setData({
            password: e.detail.value
        });
    },
    goDetail:function (e) {
        this.login();
    },
    confirm:function (e) {
        console.log(e)
        this.login();
    },
    confirmAccount:function () {
        this.setData({
            focus: true
        });
    },
    login:function () {
        var data={
            account: this.data.account ,
            password: this.data.password
        };
        wx.showLoading({
            title: '加载中',
        })
        AppApi.login(data).then(function (res) {
            wx.hideLoading()
            if(res.code===0){
                app.globalData.userInfo=res.data
                wx.navigateTo({
                    url: '../../app/components/home/home'
                });
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
    }
})



// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
