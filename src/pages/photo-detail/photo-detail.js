//index.js
//获取应用实例
const app = getApp();
var api = require('../../app-api');

var staticText={
	title:"员工登陆",
	user:"请输入手机号",
	password:"请输入密码",
	tip:"联系管理员"
};

Page({
	data: {
		placeholder: '评论一下'
	},
	onLoad: function (option) {
		// 页面渲染后 执行
		var self = this
		self.setData({
			activeid: option.activeid
		})
		self.getActiveDetail()
		console.log(self.data.activeid)
	},
	like:function() {
		var self = this
		self.setData({
			like_show:!self.data.like_show
		})
		setTimeout(function () {
			self.setData({
				like_show:!self.data.like_show
			})
		},800)
	},
	changeTabbar:function (e) {
		var index = e.currentTarget.dataset.index;
		var self = this
		self.setData({
			currenTab:index
		})
	},
	getRankingIndex: function () {
		var self = this
		api.ranking_index({
			ction
				: "ranking_index",
			vtime
				: "20180504",
			weapp
				: "maoka"
		}).then(data =>{
			if(data.code == 0){
				self.setData({
					ranking_index:data.data.ranking_index
				})
			}
		})
	},
	getArticleIndex: function () {
		var self = this
		api.article_index({
			ction
				: "article_index",
			vtime
				: "20180504",
			weapp
				: "maoka"
		}).then(data =>{
			if(data.code == 0){
				self.setData({
					article_index:data.data.article_index
				})
			}
		})
	},
	getActiveDetail: function () {
		var self = this
		wx.showLoading({
			title: '加载中',
		})
		self.setData({
			loading: true
		})
		api.commentList({
			activeid: self.data.activeid,
		}).then(data =>{
			self.setData({
				activeInfo:data.data.activeInfo,
				cardInfo:data.data.cardInfo,
				commentList:data.data.commentList,
				isLike: data.data.isLike,
				likeLength: data.data.likeLength,
			})
			self.setData({
				loading: false
			})
			wx.hideLoading();
		})
	},
	submit: function (e) {
		var self = this
		if(self.data.placeholder == '评论一下'){
			api.commentAdd({
				activeid: self.data.activeid,
				userid: app.globalData.userInfo.userid,
				comment: e.detail.value,
				rootid: self.data.rootid,
			}).then(data =>{
				self.getActiveDetail()
				
			})
		}else {
			api.commentAdd({
				activeid: self.data.activeid,
				parentid: self.data.commentParentId,
				userid: app.globalData.userInfo.userid,
				rootid: self.data.rootid,
				comment: e.detail.value,
			}).then(data =>{
				self.getActiveDetail()
			})
		}
		self.setData({
			inputTxt: ''
		})
	},
	editLike: function () {
		var self = this
		var type
		if(self.data.cardInfo.islike == 2){
			type = 1
		}else {
			type = 2
		}
		var cardInfo = self.data.cardInfo
		cardInfo.islike = type
		self.setData({
			cardInfo:cardInfo
		})
		api.editLike({
			cardid: self.data.cardInfo.cardid,
			userid: app.globalData.userInfo.userid,
			type: type,
		}).then(data =>{
			console.log(data)
		})
	},
	reply: function (e) {
		var self = this
		console.log(e.currentTarget.dataset.item)
		if(e.currentTarget.dataset.item.userInfo.userid == app.globalData.userInfo.userid){
			return
		}
		self.setData({
			placeholder: "@" + e.currentTarget.dataset.item.userInfo.nickName +':',
			commentParentId: e.currentTarget.dataset.item.commentInfo.commentid,
			focus: true,
			rootid: e.currentTarget.dataset.item.commentInfo.rootid ||  e.currentTarget.dataset.item.commentInfo.commentid,
		})
	},
	comment: function () {
		var self = this
		self.setData({
			placeholder: '评论一下',
			commentParentId: '',
			inputTxt: '',
			focus: true,
		})
	},
	activeLike: function () {
		if(this.data.LikeIng){
			return
		}
		var self = this
		self.setData({
			'animation': true,
			'LikeIng': true,
		})
		setTimeout(function () {
			self.setData({
				'animation': false
			})
		},1000)
		var type
		if(self.data.isLike){
			type = false
		}else {
			type = true
		}
		api.editActiveLike({
			activeid:self.data.activeid,
			userid: app.globalData.userInfo.userid,
			type: type,
		}).then(data =>{
			if(data.status == 200){
				self.setData({
					isLike: !self.data.isLike,
					likeLength: type?self.data.likeLength + 1 : self.data.likeLength - 1,
					LikeIng: false
				})
			}
		})
	}
})
