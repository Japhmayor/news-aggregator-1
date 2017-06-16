
import Store from '../stores/Store'

import NewsApi from '../../api/NewsApi'
import NewsApiAdapter from '../../adapters/NewsApiAdapter'
import WebhoseApi from '../../api/WebhoseApi'
import WebhoseAdapter from '../../adapters/WebhoseAdapter'
import StackOverflowApi from '../../api/StackOverflowApi'
import StackOverflowAdapter from '../../adapters/StackOverflowAdapter'

const MSG_ERR_TAIL = 'Key is not set. \nPlease, set and try again.';
const MSG_ERR_DF = 'Unknow news API provider';

/*
const _rApiConf = {
  DEFAULT: {
    apiKey: undefined,
    msgErr: MSG_ERR_DF
  },
  N: {
    apiKey: Store.getNewsKey(),
    api: NewsApi,
    adapter: NewsApiAdapter,
    msgErr: `NewsApi ${MSG_ERR_TAIL}`
  },
  W: {
    apiKey: Store.getWebhoseKey(),
    api: WebhoseApi,
    adapter: WebhoseAdapter,
    msgErr: `Webhose.io API ${MSG_ERR_TAIL}`
  },
  SO: {
    apiKey: true,
    api: StackOverflowApi,
    adapter: StackOverflowAdapter,
    msgErr: `StackOverflowApi API ${MSG_ERR_TAIL}`
  }
};
*/

const RouterApiConf = {
  getApiConf: (id) => {
    /*
    const conf = _rApiConf[id];
    return (conf)
       ? conf
       : _rApiConf.DEFAULT;
    */


    switch(id){
      case 'N':
        return {
          apiKey: Store.getNewsKey(),
          api: NewsApi,
          adapter: NewsApiAdapter,
          msgErr: `NewsApi ${MSG_ERR_TAIL}`
        };
      case 'W':
        return {
          apiKey: Store.getWebhoseKey(),
          api: WebhoseApi,
          adapter: WebhoseAdapter,
          msgErr: `Webhose.io API ${MSG_ERR_TAIL}`
        };
      case 'SO':
        return {
          apiKey: true,
          api: StackOverflowApi,
          adapter: StackOverflowAdapter,
          msgErr: `StackOverflowApi API ${MSG_ERR_TAIL}`
        }
      default:
        return {
          apiKey: undefined,
          msgErr: MSG_ERR_DF
        };
    }    
  }
}

export default RouterApiConf
