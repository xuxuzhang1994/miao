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
		currenTab: 1
	},
	onLoad: function () {
		// 页面渲染后 执行
		var self = this
		self.getRankingIndex()
		self.getArticleIndex()
		self.getGoosInfo()
		console.log(self.data.flow_data)
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
	getGoosInfo: function () {
		var self = this
		self.setData({
			goodsInfo: {
				"content": ["https://cdn.maoka777.com/lordems_xq.jpg"],
				"end_time": 4077532800,
				"express_price": 0,
				"id": "20",
				"is_follow_shop": true,
				"now_time": 1532314565,
				"pay_type": 1,
				"product_price": 6000,
				"rule": ["1. \u6bcf\u592910\u70b9\u5151\u6362\uff0c\u5468\u672b\u53cc\u500d\u4e0a\u67b6", "2. \u6240\u6709\u7528\u6237\u5747\u53ef\u5151\u6362\uff0c\u6bcf\u4eba\u9650\u4e00\u6b21\uff0c\u76f8\u540c\u5730\u5740\u4e5f\u89c6\u4e3a\u76f8\u540c\u7528\u6237", "3. 7\u5929\u5185\u53d1\u8d27\uff0c\u53d1\u8d27\u540e\u5728[\u5151\u6362\u8bb0\u5f55]\u53ef\u67e5\u770b\u7269\u6d41\u4fe1\u606f", "4. \u8fdd\u89c4\u865a\u5047\u7684\u732b\u5361\u6211\u4eec\u4f1a\u53d6\u6d88\u4f60\u7684\u5151\u6362", "5. \u6700\u7ec8\u89e3\u91ca\u6743\u5f52\u732b\u5361Meowcard\u6240\u6709"],
				"sales": 1040,
				"shop_desc": "",
				"shop_id": 7,
				"shop_logo": "https://cdn.maoka777.com/lorde_logo.jpg",
				"shop_name": "Lorde",
				"start_time": 1532311200,
				"status": 2,
				"thumb": "https://cdn.maoka777.com/lordems1_fm.jpg",
				"thumb_url": ["https://cdn.maoka777.com/lordems_lb1.jpg", "https://cdn.maoka777.com/lordems_lb2.jpg"],
				"title": "Lorde\u8c46\u8150\u732b\u7802",
				"total": 1040,
				"type": "1",
				"view_count": 171630
			}
		})
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
