//import shortid from 'shortid'
import crId from '../utils/crId'

const C = {
  SOURCE: 'iex_news'
};

const _toArticles = (json) => {
  if (!Array.isArray(json)) {
    return [];
  }

  const articles = json.map(item => {
      const {
              headline, source,
              datetime,
              summary, related,
              url
            } = item
           , _related = related
                ? related.split(',').join(', ')
                : void 0;
      return {
        source: C.SOURCE,
        articleId: crId(),
        title: headline,
        description: summary,
        related: _related,
        author: source,
        publishedAt: datetime,
        url: url
      };
  });
  return articles;
}

const IexAdapter = {
  toNews(json, option) {
    const { symbol, recent='' } = option
        , articles = _toArticles(json);

    return {
      source: C.SOURCE,
      articles: articles,
      sortBy: `${symbol.toUpperCase()} ${recent}`
    };
  }
}

export default IexAdapter
