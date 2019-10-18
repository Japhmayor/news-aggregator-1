
const NEWS_QUERY = {
  WEBHOSE_WEB: {
    "type": "W_WEBHOSE_WEB",
    "dialogType": "WebhoseQuery",
    "paneCaption": "Webhose Query",
    "paneId": "webhose",
    "loadId": "W",
    "requestType": "NEWS",
    "dialogProps": {
       "caption": "Webhose Query",
       "source": "webhose"
     }
  },
  WEBHOSE_BRODCAST: {
    "type": "W_WEBHOSE_BRODCAST",
    "dialogType": "WebhoseBrodcast",
    "paneCaption": "Webhose.Io Broadcast",
    "paneId": "webhose_brodcast",
    "loadId": "W",
    "requestType": "BRODCAST",
    "dialogProps": {
       "caption": "Webhose Broadcast",
       "source": "webhose"
     }
  },
  STACK_TAGGED: {
    "type": "SO_TAGGED",
    "dialogType": "StackTagged",
    "paneCaption": "StackOverflow: Tagged",
    "paneId": "stack_tagged",
    "paneType": "SO_TAGGED",
    "dialogProps": {
       "caption": "Tagged Questions",
       //"source": "webhose"
     }
  },
  STACK_SEARCH: {
    "type": "SO_SEARCH",
    "dialogType": "StackSearch",
    "paneCaption": "StackOverflow: Search Questions",
    "paneId": "stack_search",
    "paneType": "SO_SEARCH",
    "dialogProps": {
       "caption": "Search Questions",
       //"source": "webhose"
     }
  },

  IEX: {
    "type": "IEX_NEWS",
    "dialogType": "IexNews",
    "paneCaption": "IEX Cloud: Stock News",
    "paneId": "iex_news",
    "paneType": "IEX_NEWS",
    "dialogProps": {
       "caption": "IEX Cloud: Stock News",
       //"source": "iex_news"
     }
  },
  NEWS_SEARCH: {
    "type": "NEWS_SEARCH",
    "dialogType": "NewsApiSearch",
    "paneCaption": "NewsApi: Search",
    "paneId": "newsapi_search",
    "dialogProps": {
       "caption": "NewsApi: Search",
       "source": "newsapi_search"
     }
  }
}

export default NEWS_QUERY
