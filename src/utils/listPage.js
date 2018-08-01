
var ListCacheFactory=function () {
    var listPageMap = {};
    // 加载数据封装
    function loadData() {
        var _self = this;
        return new Promise((resolve) => {
            _self.loadFun.call(_self).then(function (data) {
                if (data.list == null) {
                    data.list = [];
                }
                for (var i = 0; i < data.list.length; i++) {
                    _self.dataList.push(data.list[i]);
                }
                _self.hasMore = data.total > _self.dataList.length;
                // 返回是否有更多
                resolve({
                    hasMore: _self.hasMore
                });
                _self.hasInit = true;
            }, function (err) {
                reject(err);
            });
        })
    }

    var ListParent = Object.create(null);

    ListParent.refresh = function () {
        this.hash = '';
        this.listParams.page = 1;
        this.dataList.length = 0;
        return loadData.call(this);
    };
    ListParent.more = function () {
        console.log('加载更多')
        if (this.hasMore) {
            this.listParams.page += 1;
            return loadData.call(this); // 请求数据
        } else {
            return {
                hasMore: false
            }
        }
    };
    ListParent.backHash = function (hash) {
        this.hash = hash;
    };
    ListParent.enableRecall = function (enableRecall) {
        this.hasRecall = enableRecall;
    };
    ListParent.init = function (initParams) {
        var _self = this;

        // 进行初始化
        if (!_self.hasInit || !_self.hasRecall) {
            // 处理init参数
            initParams = initParams || {};
            for (var k in initParams) {
                _self.listParams[k] = initParams[k];
            }

            // 初始化数据
            return _self.refresh();
        } else {
            // 已经初始化，跳转到对应锚
            return new Promise((resolve) => {
                setTimeout(function () {
                 //   Page.goPos(_self.hash).replace();
                    resolve({
                        hasMore: _self.hasMore
                    });
                });
            });

        }

    };
    ListParent.clearInit = function () {
        this.hasInit = false;
    };

    /**
     *
     */
    return function (listId, loadFun, config) {
        var listObj = null;

        if (listPageMap.hasOwnProperty(listId)) {
            listObj = listPageMap[listId];
        } else {
            listObj = listPageMap[listId] = Object.create(ListParent);
            listObj.listId = listId;
            listObj.listParams = { // 列表查询参数
                page: 1
            };
            listObj.hash = '';
            listObj.hasInit = false;
            listObj.hasMore = false;
            listObj.hasRecall = true; // 是否拥有记忆功能
            listObj.dataList = [];  // 列表数据
            listObj.loadFun = loadFun;
        }

        // 计算初始化配置对象
        if (config) {
            // 是否开启记忆功能
            if (config.hasOwnProperty('hasRecall')) {
                listObj.hasRecall = config['hasRecall'];
            }
        }

        return listObj;
    }
}
//Vue.list=Vue.prototype.$list=ListCacheFactory();
module.exports = {
    ListCacheFactory: ListCacheFactory()
}