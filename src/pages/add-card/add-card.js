//index.js
//获取应用实例
const qiniuUploader = require("../../utils/qiniu-wxapp-sdk");
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
		iconSize: [20, 30, 40, 50, 60, 70],
		iconColor: [
			'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
		],
		iconType: [
			'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
		],
		
		flow_data: [
			{
				"card_info": {
					"age": "56\u5929",
					"avatar": "https://cdn.maoka777.com/opo4k0bsqOi8wAPFuu6eENP4opVQ_1529770108_ecd9ca.png",
					"cardid": 773679,
					"couple_stat": 0,
					"days": 55,
					"id": 773679,
					"is_favorited": false,
					"like": "\u597d\u5947\u6d3b\u6cfc\u7684\u5927\u6002\u903c",
					"name": "\u8001\u4e09",
					"owner_id": "opo4k0bsqOi8wAPFuu6eENP4opVQ"
				},
				"comment_num": 0,
				"detail_info": {
					"comment_num": 0,
					"date": 1530688146,
					"extra": {},
					"id": 271666,
					"images": ["https://cdn.maoka777.com/opo4k0bsqOi8wAPFuu6eENP4opVQ_1530688122_266512.jpg"],
					"is_liked": false,
					"like_list": [],
					"like_number": 4,
					"tag_list": [],
					"text": "\u4f60\u7684\u7761\u59ff\u662f\u771f\u7684\u725b\u903c",
					"type": "news"
				},
				"type": "news"
			},
			{
				"card_info": {
					"age": "7\u4e2a\u670819\u5929",
					"avatar": "https://cdn.maoka777.com/opo4k0WS4gkYOx95391vN6-4BHDg_1527920669_a893fb.png",
					"cardid": 562953,
					"couple_stat": 4,
					"days": 231,
					"id": 562953,
					"is_favorited": false,
					"like": "\u4e0d\u6311\u98df",
					"name": "\u5341\u4e8c",
					"owner_id": "opo4k0WS4gkYOx95391vN6-4BHDg"
				},
				"comment_num": 0,
				"detail_info": {
					"comment_num": 0,
					"date": 1530689617,
					"extra": {},
					"id": 271676,
					"images": ["https://cdn.maoka777.com/opo4k0WS4gkYOx95391vN6-4BHDg_1530689598_82756f.jpg", "https://cdn.maoka777.com/opo4k0WS4gkYOx95391vN6-4BHDg_1530689599_c7e1e6.jpg", "https://cdn.maoka777.com/opo4k0WS4gkYOx95391vN6-4BHDg_1530689600_0c2f87.jpg", "https://cdn.maoka777.com/opo4k0WS4gkYOx95391vN6-4BHDg_1530689600_91fd11.jpg", "https://cdn.maoka777.com/opo4k0WS4gkYOx95391vN6-4BHDg_1530689601_aebd98.jpg"],
					"is_liked": false,
					"like_list": [],
					"like_number": 1,
					"tag_list": [],
					"text": "\u6ca1\u6709\u5730\u4f4d\u7684\u55b5",
					"type": "news"
				},
				"type": "news"
			},
			{
				"card_info": {
					"age": "6\u4e2a\u67081\u5929",
					"avatar": "https://cdn.maoka777.com/opo4k0VRDVvjnLf9U3W_6MIW1ues_1521357804_27a645.png",
					"cardid": 799789,
					"couple_stat": 0,
					"days": 182,
					"id": 799789,
					"is_favorited": false,
					"like": "\u540d\u738b\u798f\u5982/\u5b57\u8150\u4e73/\u53f7\u9171\u8c46\u8150/Floy",
					"name": "FuRu.W",
					"owner_id": "opo4k0VRDVvjnLf9U3W_6MIW1ues"
				},
				"comment_num": 30,
				"detail_info": {
					"comment_num": 30,
					"date": 1528696102,
					"extra": {},
					"id": 238146,
					"images": ["https://cdn.maoka777.com/opo4k0VRDVvjnLf9U3W_6MIW1ues_1528696024_602272.jpg", "https://cdn.maoka777.com/opo4k0VRDVvjnLf9U3W_6MIW1ues_1528696028_44a6d1.jpg", "https://cdn.maoka777.com/opo4k0VRDVvjnLf9U3W_6MIW1ues_1528696029_f8767b.jpg", "https://cdn.maoka777.com/opo4k0VRDVvjnLf9U3W_6MIW1ues_1528696030_eba942.jpg"],
					"is_liked": false,
					"like_list": [],
					"like_number": 153,
					"tag_list": [{
						"tag_id": "9cb4e3268d58f8b69959e7fe2b5206ec",
						"tag_name": "\u753b\u753b\u521b\u4f5c"
					}],
					"text": "\u8150\u4e73\u7684\u65e5\u5e38\u4e4b\n\u55b5\u7684\u8d77\u5e8a\u5927\u6cd5",
					"type": "news"
				},
				"type": "news"
			},
			{
				"card_info": {
					"age": "75\u5929",
					"avatar": "https://cdn.maoka777.com/opo4k0TIHmfLiFl_MR5JTovEAZ04_1530600509_5f18c9.png",
					"cardid": 851607,
					"couple_stat": 0,
					"days": 74,
					"id": 851607,
					"is_favorited": false,
					"like": "\u5f02\u77b3\u7684\u5706\u8138\u5c0f\u72ee\u5b50\u732b",
					"name": "\u5446\u59b9",
					"owner_id": "opo4k0TIHmfLiFl_MR5JTovEAZ04"
				},
				"comment_num": 0,
				"detail_info": {
					"comment_num": 0,
					"date": 1530601814,
					"extra": {
						"duration": 10,
						"height": 544,
						"width": 960
					},
					"id": 270390,
					"images": ["https://cdn.maoka777.com/opo4k0TIHmfLiFl_MR5JTovEAZ04_1530601753_a2bec4.mp4"],
					"is_liked": false,
					"like_list": [],
					"like_number": 21,
					"tag_list": [],
					"text": "\u8981\u4e00\u8d77\u6765\u73a9\u5417",
					"type": "video"
				},
				"type": "video"
			},
			{
				"card_info": {
					"age": "1\u5c812\u4e2a\u6708",
					"avatar": "https://cdn.maoka777.com/opo4k0VyUTf1vN9mcEaxqdhBAACc_1520747399_750da2.png",
					"cardid": 339271,
					"couple_stat": 0,
					"days": 429,
					"id": 339271,
					"is_favorited": false,
					"like": "\u80d6\u6210\u957f\u997c",
					"name": "\u957f\u679c",
					"owner_id": "opo4k0VyUTf1vN9mcEaxqdhBAACc"
				},
				"comment_num": 5,
				"detail_info": {
					"comment_num": 5,
					"date": 1530610165,
					"extra": {},
					"id": 270512,
					"images": ["https://cdn.maoka777.com/opo4k0VyUTf1vN9mcEaxqdhBAACc_1530610145_ba1e4e.jpg"],
					"is_liked": false,
					"like_list": [],
					"like_number": 24,
					"tag_list": [],
					"text": "",
					"type": "news"
				},
				"type": "news"
			},
			{
				"card_info": {
					"age": "1\u5c818\u4e2a\u6708",
					"avatar": "https://cdn.maoka777.com/opo4k0TrQyuMexH7xOpwj64keZEw_1528249512_2d550f.png",
					"cardid": 32106,
					"couple_stat": 0,
					"days": 623,
					"id": 32106,
					"is_favorited": false,
					"like": "\u8c10\u661f\u9644\u4f53",
					"name": "\u9999\u83c7",
					"owner_id": "opo4k0TrQyuMexH7xOpwj64keZEw"
				},
				"comment_num": 2,
				"detail_info": {
					"comment_num": 2,
					"date": 1530615993,
					"extra": {
						"duration": 15,
						"height": 960,
						"width": 544
					},
					"id": 270591,
					"images": ["https://cdn.maoka777.com/opo4k0TrQyuMexH7xOpwj64keZEw_1530615976_294f6a.mp4"],
					"is_liked": false,
					"like_list": [],
					"like_number": 17,
					"tag_list": [],
					"text": "",
					"type": "video"
				},
				"type": "video"
			}
		],
		currenTab: 1,
		token: '',
		date: '',
		sex: '1'
	},
	formSubmit: function(e) {
		var self = this
		console.log('form发生了submit事件，携带数据为：', e.detail.value)
		if(!self.data.img){
			wx.showToast({
				title: '给猫猫拍一个帅气的头像吧',
				icon: 'none',
				duration: 2000
			})
			return
		}
		if(!e.detail.value.name){
			wx.showToast({
				title: '你还没有给猫猫起名字吗',
				icon: 'none',
				duration: 2000
			})
			return
		}
		if(!e.detail.value.weight){
			wx.showToast({
				title: '猫猫体重是多少呢',
				icon: 'none',
				duration: 2000
			})
			return
		}
		if(!self.data.birthday){
			wx.showToast({
				title: '猫猫的生日是那一天呢',
				icon: 'none',
				duration: 2000
			})
			return
		}
		if(!self.data.birthday){
			wx.showToast({
				title: '猫猫是哪一天到家的呢',
				icon: 'none',
				duration: 2000
			})
			return
		}
		self.setData({
			loading: true
		})
		api.addCard({
			userid:app.globalData.userInfo.userid,
			name:e.detail.value.name,
			weight:e.detail.value.weight,
			content:e.detail.value.content,
			picture:self.data.img,
			gender:self.data.sex,
			birthday:self.data.birthday,
			homeday:self.data.homeday,
		}).then(function (data) {
			console.log(data)
			self.setData({
				loading: false
			})
			if(data.status == 200){
				wx.switchTab({
					url: '/pages/card/card',
					fail:function(){
						console.info("跳转失败")
					}
				})
			}
		})
	},
	onLoad: function () {
		wx.checkSession({
			success: function(){
				console.log(1)
				//session_key 未过期，并且在本生命周期一直有效
			},
			fail: function(){
				// session_key 已经失效，需要重新执行登录流程
				console.log(2)
				wx.login() //重新登录
			}
		})
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
	bindBirthdayChange: function(e) {
		this.setData({
			birthday: e.detail.value
		})
	},
	bindHomedayChange: function(e) {
		this.setData({
			homeday: e.detail.value
		})
	},
	changeSex: function (e) {
		console.log(e)
		var sex = e.currentTarget.dataset.sex;
		this.setData({
			sex: sex
		})
	},
	uploadImg: function (img) {
		var self = this
		return new Promise(resolve => {
			qiniuUploader.upload(img, (res) => {
				resolve(res.imageURL)
			}, (error) => {
				console.log('error: ' + error);
			}, {
				region: 'ECN',
				uptokenURL: 'https://miao.zjy1994.com/getToken',
				domain: 'https://miaoimg.zjy1994.com', // bucket 域名，下载资源时用到。如果设置，会在 success callback 的 res 参数加上可以直接使用的 ImageURL
				// 字段。否则需要自己拼接
			})
		})
	},
	addPhoto: function () {
		var self = this
		wx.chooseImage({
			count: 1,
			sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
			success: function(e) {
				var img = e.tempFilePaths[0]
				self.uploadImg(img).then(url =>{
					self.setData({
						img:url
					})
				})
			}
		})
	},
})
