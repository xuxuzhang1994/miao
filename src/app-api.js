
var request = require('./utils/request.js');

module.exports={
    login:function (params) { //登录接口
       return request.post('login',params);
    },
		loginrefash:function (params) { //登录接口
       return request.post('login/loginrefash',params);
    },
		ranking_index:function (params) { //登录接口
	    return request.post('https://mina.maoka777.com/api/ranking_index',params);
    },
	  article_index:function (params) { //登录接口
       return request.get('article',params);
    },
		upload:function (params) {
			return request.get('getToken',params);
		},
		publishPhotos:function (params) {
			return request.post('publish',params);
		},
		addCard:function (params) {
			return request.post('card/card-add',params);
		},
		cardList:function (params) {
			return request.get('card/card-list',params);
		},
		goodsinfo:function (params) {
			return request.post('https://mina.maoka777.com/api/get_product_details',params);
		},
		addActive:function (params) {
			return request.post('active/active-add',params);
		},
		activeList:function (params) {
			return request.get('active/active-list',params);
		},
		commentAdd:function (params) {
			return request.post('common/comment-add',params);
		},
		commentList:function (params) {
			return request.get('active/active-detail',params);
		},
		editLike:function (params) {
			return request.post('like',params);
		},
		editActiveLike:function (params) {
			return request.post('active/active-like',params);
		}
};
