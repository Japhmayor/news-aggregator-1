import Reflux from 'reflux'

import ComponentActions from '../actions/ComponentActions'
import NewsActions from '../actions/NewsActions'
import LoadingProgressActions from '../actions/LoadingProgressActions'

import ComponentSlice from './ComponentSlice'
import NewsSlice from './NewsSlice'
import SettingSlice from './SettingSlice'
import WithLoadingProgress from './WithLoadingProgress'

const Store = Reflux.createStore({
  listenables: [
       ComponentActions,
       NewsActions,
       LoadingProgressActions
  ],

  ...ComponentSlice,
  ...NewsSlice,
  ...SettingSlice,
  ...WithLoadingProgress
})

export default Store
