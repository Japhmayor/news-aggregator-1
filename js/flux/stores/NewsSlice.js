'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NewsActions = require('../actions/NewsActions');

var _ComponentActions = require('../actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _LoadingProgressActions = require('../actions/LoadingProgressActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logic = {
  loadNewsCompleted: function loadNewsCompleted(slice, news) {
    var source = news.source,
        _news$articles = news.articles,
        articles = _news$articles === undefined ? [] : _news$articles,
        sortBy = news.sortBy;

    slice[source] = slice[source] ? articles.concat(slice[source]) : articles;
    return {
      id: source,
      data: slice[source],
      sortBy: sortBy
    };
  },
  removeNews: function removeNews(slice, item) {
    var id = item.id,
        source = item.source;

    slice[source] = slice[source].filter(function (article) {
      return article.articleId !== id;
    });
  }
};

var NewsSlice = {
  news: {},

  onLoadNews: function onLoadNews() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _ComponentActions2.default.showNewsPane(option.itemConf);
    this.triggerLoadingProgress(_LoadingProgressActions.TYPES.LOADING);
  },
  onLoadNewsCompleted: function onLoadNewsCompleted(_ref) {
    var news = _ref.news,
        itemConf = _ref.itemConf;

    var r = Logic.loadNewsCompleted(this.news, news);
    this.trigger(_NewsActions.TYPES.LOAD_NEWS_COMPLETED, r);
    this.triggerLoadingProgress(_LoadingProgressActions.TYPES.LOADING_COMPLETE);
  },
  onLoadNewsFailed: function onLoadNewsFailed(option) {
    _ComponentActions2.default.showModalDialog('ALERT_DIALOG', option);
    this.triggerLoadingProgress(_LoadingProgressActions.TYPES.LOADING_FAILED);
  },
  onRemoveNews: function onRemoveNews(item) {
    Logic.removeNews(this.news, item);
  }
};

exports.default = NewsSlice;
//# sourceMappingURL=D:\_Dev\_React\_News\js\flux\stores\NewsSlice.js.map