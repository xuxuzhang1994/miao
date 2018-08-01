const qiniuUploader = require("../../utils/qiniu-wxapp-sdk");
var api = require('../../app-api');
const app = getApp();
function compare(property){
	return function(a,b){
		var value1 = a[property];
		var value2 = b[property];
		return value1 - value2;
	}
}
Page({
	data:{
	},
	formSubmit: function(e) {
		var self = this
		console.log('form发生了submit事件，携带数据为：', e.detail.value)
		self.setData({
			content: e.detail.value.textarea
		})
		if(!self.data.content){
			wx.showToast({
				title: '您还没有填写内容',
				icon: 'none',
				duration: 2000
			})
			return
		}
		if(!self.data.AppPhotosTemp){
			wx.showToast({
				title: '您还没有上传照片',
				icon: 'none',
				duration: 2000
			})
			return
		}
		self.uploadAllImg().then(data =>{
			wx.showLoading({
				title: '加载中',
			})
			api.addActive({
				cardid: self.data.cardInfo.cardid,
				userid: app.globalData.userInfo.userid,
				content: self.data.content,
				photoList: self.data.photoList,
				latitude: self.data.locationInfo && self.data.locationInfo.latitude,
				longitude: self.data.locationInfo && self.data.locationInfo.longitude,
				address: self.data.locationInfo && self.data.locationInfo.address,
			}).then(function (data) {
				wx.hideLoading()
				wx.switchTab({
					url: '/pages/index/index',
					fail:function(){
						console.info("跳转失败")
					}
				})
			})
		})
	},
	
	uploadAllImg: function () {
		var self = this
		return new Promise(resolve => {
			let flag = 0;
			var arr= []
			for(let i = 0; i<self.data.AppPhotosTemp.length;i++){
				self.upload(self.data.AppPhotosTemp[i]).then(data =>{
					arr.push({
						index:i,
						url:data
					})
					flag++
					if(flag == self.data.AppPhotosTemp.length){
						arr.sort(compare('index'))
						var arr2 = arr.map(item =>{
							return item.url
						})
						console.log(arr2)
						self.setData({
							photoList: arr2
						})
						resolve(arr2)
					}
				})
			}
		})
		
	},
	goBack: function() {
		wx.showModal({
			title: '',
			content: '这是一个模态弹窗',
			success: function(res) {
				if (res.confirm) {
					wx.navigateBack({
						delta: 1
					});
				} else if (res.cancel) {
					console.log('用户点击取消')
				}
			}
		})
	},
	onLoad(){
		var self = this
		var AppPhotosTemp = getApp().globalData.AppPhotosTemp
		self.setData({
			AppPhotosTemp: AppPhotosTemp.temp || [],
		})
		console.log(AppPhotosTemp)
	},
	
	upload: function (filePath) {
		var self = this
		return new Promise(resolve => {
			qiniuUploader.upload(filePath, (res) => {
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
	onMyEvent:function(e){
		this.setData({
			cardInfo: e.detail.cardInfo
		})
	},
	addPhoto: function () {
		var self = this
		wx.chooseImage({
			count: 6-self.data.AppPhotosTemp,
			sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
			success: function(e) {
				var arr = self.data.AppPhotosTemp.concat(e.tempFilePaths)
				console.log(arr)
				self.setData({
					AppPhotosTemp: arr
				})
			}
		})
	},
	delPhoto: function (e) {
		var index = e.currentTarget.dataset.index
		var self = this
		var arr = self.data.AppPhotosTemp
		arr.splice(index,1)
		self.setData({
			AppPhotosTemp: arr
		})
		
	},
	getLocation: function () {
		var self = this
		wx.chooseLocation({
			type: 'wgs84',
			success: function(res) {
				self.setData({
					locationInfo: res
				})
			}
		})
	}
})