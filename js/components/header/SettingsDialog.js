'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _safeFn = require('../../utils/safeFn');

var _safeFn2 = _interopRequireDefault(_safeFn);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Dialog = require('../dialogs/Dialog.Style');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _ComponentActions = require('../../flux/actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _ModalDialog = require('../zhn-moleculs/ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _SecretField = require('../zhn-m-input/SecretField');

var _SecretField2 = _interopRequireDefault(_SecretField);

var _InputSelect = require('../zhn-m-input/InputSelect');

var _InputSelect2 = _interopRequireDefault(_InputSelect);

var _RaisedButton = require('../zhn-atoms/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from 'prop-types'

var S = {
  MODAL: {
    position: 'static',
    width: '320px',
    height: '300px',
    margin: '70px auto 0px'
  },
  DIV_BT: {
    marginTop: '26px',
    marginBottom: '4px'
  }
};

var SET_NEWS_KEY = 'setNewsKey';
var SET_WEBHOSE_KEY = 'setWebhoseKey';

var DF_THEME = { caption: "Dark", value: "GREY" };
var _themeOptions = [{ caption: "Dark", value: "GREY" }, { caption: "Light", value: "WHITE" }, { caption: "Sand", value: "SAND" }];

var STR_EMPTY = '';
var _onTestLengthOrEmpty = function _onTestLengthOrEmpty(length) {
  return function (str) {
    if (str.length === length || str === STR_EMPTY) {
      return true;
    } else {
      return false;
    }
  };
};

var _onTestNewsApi = _onTestLengthOrEmpty(32);
var _onTestWebhose = _onTestLengthOrEmpty(36);

var SettingsDialog = function (_Component) {
  (0, _inherits3.default)(SettingsDialog, _Component);

  /*
  static propTypes = {
    isShow: PropTypes.bool,
    data: PropTypes.shape({
      setNewsKey: PropTypes.func,
      setWebhoseKey: PropTypes.func,
    }),
    onClose: PropTypes.func
  }
  */
  function SettingsDialog(props) {
    (0, _classCallCheck3.default)(this, SettingsDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SettingsDialog.__proto__ || Object.getPrototypeOf(SettingsDialog)).call(this));

    _this._handleKeyDown = function (event) {
      if (event.keyCode === 13 || event.keyCode === 27) {
        _this.props.onClose();
      }
    };

    _this._handleSet = function () {
      var _this$props = _this.props,
          data = _this$props.data,
          onClose = _this$props.onClose,
          setNewsKey = (0, _safeFn2.default)(data, SET_NEWS_KEY),
          setWebhoseKey = (0, _safeFn2.default)(data, SET_WEBHOSE_KEY);

      setNewsKey(_this.inputNews.getValue());
      setWebhoseKey(_this.inputWebhose.getValue());
      onClose();
    };

    _this._selectTheme = function (item) {
      var theme = _this.props.theme;

      if (item && theme.getThemeName() !== item.value) {
        theme.setThemeName(item.value);
        _ComponentActions2.default.changeTheme();
        _this.forceUpdate();
      }
    };

    _this._createCommandButtons = function (S) {
      return [_react2.default.createElement(_RaisedButton2.default, {
        rootStyle: S.RAISED_ROOT,
        clDiv: S.CL_RAISED_DIV,
        caption: 'Set & Close',
        onClick: _this._handleSet
      })];
    };

    _this._refInputNews = function (comp) {
      return _this.inputNews = comp;
    };

    _this._refInputWebhose = function (comp) {
      return _this.inputWebhose = comp;
    };

    return _this;
  }

  (0, _createClass3.default)(SettingsDialog, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
        return false;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isShow = _props.isShow,
          theme = _props.theme,
          onClose = _props.onClose,
          TS = theme.createStyle(_Dialog2.default),
          _commandButtons = this._createCommandButtons(TS.BT);

      return _react2.default.createElement(
        _ModalDialog2.default,
        {
          style: (0, _extends3.default)({}, S.MODAL, TS.R_DIALOG),
          divBtStyle: S.DIV_BT,
          styleCaption: TS.BROWSER_CAPTION,
          styleButton: TS.BT,
          caption: 'User Settings',
          isShow: isShow,
          isClosePrimary: true,
          commandButtons: _commandButtons,
          onKeyDown: this._handleKeyDown,
          onClose: onClose
        },
        _react2.default.createElement(_SecretField2.default, {
          rootStyle: TS.INPUT_ROOT,
          ref: this._refInputNews,
          caption: 'NewsApi API Key (32 Symbols)',
          maxLength: 32,
          errorMsg: '32 symbols must be',
          onTest: _onTestNewsApi
        }),
        _react2.default.createElement(_SecretField2.default, {
          rootStyle: TS.INPUT_ROOT,
          ref: this._refInputWebhose,
          caption: 'Webhose API Key (36 Symbols)',
          maxLength: 36,
          errorMsg: '36 symbols must be',
          onTest: _onTestWebhose
        }),
        _react2.default.createElement(_InputSelect2.default, {
          styleConfig: TS.SELECT,
          caption: 'Theme (Default: Dark)',
          initItem: DF_THEME,
          options: _themeOptions,
          onSelect: this._selectTheme
        })
      );
    }
  }]);
  return SettingsDialog;
}(_react.Component);

exports.default = (0, _withTheme2.default)(SettingsDialog);
//# sourceMappingURL=SettingsDialog.js.map