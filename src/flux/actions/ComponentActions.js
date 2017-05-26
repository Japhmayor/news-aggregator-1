import Reflux from 'reflux'

export const TYPES = {
  SHOW_NEWS_DIALOG: 'showNewsDialog',
  SHOW_MODAL_DIALOG: 'showModalDialog',

  SHOW_NEWS_PANE: 'showNewsPane',
  TOGGLE_NEWS_PANE: 'toggleNewsPane',
  CLOSE_NEWS_PANE: 'closeNewsPane',

  SHOW_ABOUT: 'showAbout',

  SHOW_BROWSER: 'showBrowser',
  UPDATE_BROWSER: 'updateBrowser'
}

const Actions = Reflux.createActions({
  [TYPES.SHOW_NEWS_DIALOG]: {},
  [TYPES.SHOW_MODAL_DIALOG]: {},

  [TYPES.SHOW_NEWS_PANE]: {},
  [TYPES.TOGGLE_NEWS_PANE]: {},
  [TYPES.CLOSE_NEWS_PANE]: {},

  [TYPES.SHOW_ABOUT]: {},
  [TYPES.SHOW_BROWSER]: {},
  [TYPES.UPDATE_BROWSER]: {}
})

export default Actions
