'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _toFirstUpper = function _toFirstUpper(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

var NewsApiAdapter = {
  toArticles: function toArticles() {
    var articles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var source = arguments[1];

    return articles.map(function (article) {
      article.articleId = _shortid2.default.generate();
      article.source = source;
      return article;
    });
  },

  toNews: function toNews(json, option) {
    var source = option.source,
        _json$articles = json.articles,
        articles = _json$articles === undefined ? [] : _json$articles,
        _json$sortBy = json.sortBy,
        sortBy = _json$sortBy === undefined ? '' : _json$sortBy;


    var _sortBy = _toFirstUpper(sortBy),
        _articles = NewsApiAdapter.toArticles(articles, source);
    return {
      source: source,
      articles: _articles,
      sortBy: _sortBy
    };
  }
};

exports.default = NewsApiAdapter;
//# sourceMappingURL=D:\_Dev\_React\_News\js\adapters\NewsApiAdapter.js.map