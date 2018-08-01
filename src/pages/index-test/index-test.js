let col1H = 0;
let col2H = 0;
let col3H = 0;

Page({
	
	data: {
		scrollH: 0,
		imgWidth: 0,
		loadingCount: 0,
		images: [],
		col1: [],
		col2: [],
		col3: [],
	},
	
	onLoad: function () {
		wx.getSystemInfo({
			success: (res) => {
				let ww = res.windowWidth;
				let wh = res.windowHeight;
				let imgWidth = ww * 0.31;
				let scrollH = wh;
				
				this.setData({
					scrollH: scrollH,
					imgWidth: imgWidth
				});
				
				//加载首组图片
				this.loadImages();
			}
		})
	},
	
	onImageLoad: function (e) {
		let imageId = e.currentTarget.id;
		let oImgW = e.detail.width;         //图片原始宽度
		let oImgH = e.detail.height;        //图片原始高度
		let imgWidth = this.data.imgWidth;  //图片设置的宽度
		let scale = imgWidth / oImgW;        //比例计算
		let imgHeight = oImgH * scale;      //自适应高度
		
		let images = this.data.images;
		let imageObj = null;
		
		for (let i = 0; i < images.length; i++) {
			let img = images[i];
			if (img.id === imageId) {
				imageObj = img;
				break;
			}
		}
		console.log(imageObj)
		
		imageObj.height = imgHeight;
		
		let loadingCount = this.data.loadingCount - 1;
		let col1 = this.data.col1;
		let col2 = this.data.col2;
		let col3 = this.data.col3;
		
		//判断当前图片添加到左列还是右列
		debugger
		
		this.data.images.forEach(e =>{
		
		})
		if (col1H <= col2H) {
			if(col1H <= col3H){
				col1H += imgHeight;
				col1.push(imageObj);
			}else{
				col3H += imgHeight;
				col3.push(imageObj);
			}
		} else{
			if(col1H <= col3H){
				if(col2H <= col3H){
					col2H += imgHeight;
					col2.push(imageObj);
				}else {
					col3H += imgHeight;
					col3.push(imageObj);
				}
				
			}else if(col2H <= col3H){
				col2H += imgHeight;
				col2.push(imageObj);
			}else {
				col3H += imgHeight;
				col3.push(imageObj);
			}
			
		}
		
		// this.data.images.forEach(e =>{
		// 	if (col1H <= col2H) {
		// 		if(col1H <= col3H){
		// 			col1H += e;
		// 			col1.push(e);
		// 		}else{
		// 			col3H += e;
		// 			col3.push(e);
		// 		}
		// 	} else{
		// 		if(col1H <= col3H){
		// 			col2H += e;
		// 			col2.push(e);
		// 		}else if(col2H <= col3H){
		// 			col2H += e;
		// 			col2.push(e);
		// 		}
		//
		// 	}
		// })
		
		let data = {
			loadingCount: loadingCount,
			col1: col1,
			col2: col2,
			col3: col3,
		};
		
		//当前这组图片已加载完毕，则清空图片临时加载区域的内容
		if (!loadingCount) {
			data.images = [];
		}
		
		this.setData(data);
	},
	
	loadImages: function () {
		var arr = [
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
		]
		arr = arr.concat(arr)
		var arr2 = []
		arr.forEach( e=>{
			arr2 = arr2.concat(e.detail_info.images)
		})
		console.log(arr2)
		let images = arr2.map( item =>{
			return{
				pic: item,
				height: 0
			}
		})
		// let images = [
		// 	{ pic: "../../../../../images/pic/1.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/2.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/3.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/4.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/5.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/6.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/7.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/8.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/9.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/10.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/11.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/12.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/13.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/14.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/1.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/2.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/3.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/4.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/5.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/6.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/7.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/8.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/9.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/10.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/11.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/12.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/13.jpg", height: 0 },
		// 	{ pic: "../../../../../images/pic/14.jpg", height: 0 },
		//
		// ];
		
		let baseId = "img-" + (+new Date());
		
		for (let i = 0; i < images.length; i++) {
			images[i].id = baseId + "-" + i;
		}
		
		this.setData({
			loadingCount: images.length,
			images: images
		});
	}
	
})
