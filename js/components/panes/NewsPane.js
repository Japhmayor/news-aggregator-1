"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _NewsPane = _interopRequireDefault(require("./NewsPane.Style"));

var _has = _interopRequireDefault(require("../has"));

var _crModelMore = _interopRequireDefault(require("./crModelMore"));

var _Comp = _interopRequireDefault(require("../Comp"));

var CHILD_MARGIN = 36,
    RESIZE_INIT_WIDTH = 635,
    RESIZE_MIN_WIDTH = 395,
    RESIZE_MAX_WIDTH = 1200,
    RESIZE_DELTA = 10,
    CL = {
  SHOW_POPUP: "show-popup",
  MENU_MORE: "popup-menu items__menu-more"
};
var S = {
  ROOT_DIV: {
    backgroundColor: '#4d4d4d',
    padding: '0px 0px 3px 0px',
    position: 'relative',
    borderRadius: 4,
    height: 'calc(100vh - 71px)',
    minHeight: 500,
    marginLeft: 16,
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    overflowY: 'hidden',
    overflowX: 'hidden'
  },
  BT_REMOVE: {
    position: 'relative',
    top: -3,
    marginLeft: 16,
    marginRight: 6
  },
  SCROLL_DIV: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: 10
  },
  INLINE_BLOCK: {
    display: 'inline-block'
  },
  NONE: {
    display: 'none'
  }
};

var _getWidth = function _getWidth(style) {
  return parseInt(style.width, 10) || RESIZE_INIT_WIDTH;
};

var _toStyleWidth = function _toStyleWidth(width) {
  return width + 'px';
};

var NewsPane =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(NewsPane, _Component);

  function NewsPane(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._onStore = function (actionType, option) {
      if (option === void 0) {
        option = {};
      }

      var _this$props = _this.props,
          addAction = _this$props.addAction,
          showAction = _this$props.showAction,
          toggleAction = _this$props.toggleAction,
          id = _this$props.id;

      if (option.id === id) {
        switch (actionType) {
          case addAction:
            {
              _this.setState({
                isShow: true,
                articles: option.data,
                sortBy: option.sortBy || _this.state.sortBy
              });

              break;
            }

          case showAction:
            _this.setState({
              isShow: true
            });

            break;

          case toggleAction:
            _this.setState(function (prevState) {
              return {
                isShow: !prevState.isShow
              };
            });

            break;

          default:
            return void 0;
        }
      }
    };

    _this._showMore = function () {
      _this.setState({
        isMore: true
      });
    };

    _this._hToggleMore = function () {
      _this.setState(function (prevState) {
        return {
          isMore: !prevState.isMore
        };
      });
    };

    _this._getRootNodeStyle = function () {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          rootDiv = _assertThisInitialize.rootDiv,
          _ref = rootDiv || {},
          _ref$style = _ref.style,
          style = _ref$style === void 0 ? {} : _ref$style;

      return style;
    };

    _this._resizeTo = function (width) {
      _this._getRootNodeStyle().width = _toStyleWidth(width);
    };

    _this._plusToWidth = function () {
      var style = _this._getRootNodeStyle(),
          w = _getWidth(style) + RESIZE_DELTA;

      if (w < RESIZE_MAX_WIDTH) {
        style.width = _toStyleWidth(w);
      }
    };

    _this._minusToWidth = function () {
      var style = _this._getRootNodeStyle(),
          w = _getWidth(style) - RESIZE_DELTA;

      if (w > RESIZE_MIN_WIDTH) {
        style.width = _toStyleWidth(w);
      }
    };

    _this._hHide = function () {
      var onClose = _this.props.onClose;
      onClose();

      _this.setState({
        isShow: false
      });
    };

    _this._refRootDiv = function (node) {
      return _this.rootDiv = node;
    };

    _this._getRootDiv = function () {
      return _this.rootDiv;
    };

    _this.childMargin = CHILD_MARGIN;
    _this._widthStyle = _has["default"].initWidthStyle();
    _this._MODEL = (0, _crModelMore["default"])({
      onMinWidth: _this._resizeTo.bind((0, _assertThisInitialized2["default"])(_this), RESIZE_MIN_WIDTH),
      onInitWidth: _this._resizeTo.bind((0, _assertThisInitialized2["default"])(_this), RESIZE_INIT_WIDTH),
      onPlusWidth: _this._plusToWidth,
      onMinusWidth: _this._minusToWidth,
      onRemoveItems: props.onRemoveItems
    });
    _this.state = {
      isShow: true,
      isMore: false,
      articles: [],
      sortBy: ''
    };
    return _this;
  }

  var _proto = NewsPane.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var store = this.props.store;
    this.unsubscribe = store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto._renderArticles = function _renderArticles(articles, onCloseItem, onRemoveUnder) {
    if (articles === void 0) {
      articles = [];
    }

    var Item = this.props.Item;
    return articles.map(function (article) {
      return _react["default"].createElement(Item, {
        key: article.articleId,
        item: article,
        onCloseItem: onCloseItem,
        onRemoveUnder: onRemoveUnder
      });
    });
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        paneCaption = _this$props2.paneCaption,
        theme = _this$props2.theme,
        onRemoveItems = _this$props2.onRemoveItems,
        onRemoveUnder = _this$props2.onRemoveUnder,
        onCloseItem = _this$props2.onCloseItem,
        TS = theme.createStyle(_NewsPane["default"]),
        _this$state = this.state,
        isShow = _this$state.isShow,
        isMore = _this$state.isMore,
        articles = _this$state.articles,
        sortBy = _this$state.sortBy,
        _sortBy = sortBy ? ': ' + sortBy : '',
        _paneCaption = "" + paneCaption + _sortBy,
        _styleIsShow = isShow ? S.INLINE_BLOCK : S.NONE,
        _classIsShow = isShow ? CL.SHOW_POPUP : void 0;

    return _react["default"].createElement("div", {
      ref: this._refRootDiv,
      className: _classIsShow,
      style: (0, _extends2["default"])({}, this._widthStyle, {}, S.ROOT_DIV, {}, TS.PANE_ROOT, {}, _styleIsShow)
    }, _react["default"].createElement(_Comp["default"].ModalSlider, {
      isShow: isMore,
      className: CL.MENU_MORE,
      style: TS.EL_BORDER,
      model: this._MODEL,
      onClose: this._hToggleMore
    }), _react["default"].createElement(_Comp["default"].BrowserCaption, {
      rootStyle: TS.PANE_CAPTION,
      caption: _paneCaption,
      onMore: this._showMore,
      onClose: this._hHide
    }, _react["default"].createElement(_Comp["default"].CircleButton, {
      caption: "R",
      title: "Remove All Items",
      style: S.BT_REMOVE,
      onClick: onRemoveItems
    }), _react["default"].createElement(_Comp["default"].SvgHrzResize, {
      minWidth: RESIZE_MIN_WIDTH,
      maxWidth: RESIZE_MAX_WIDTH,
      getDomNode: this._getRootDiv
    })), _react["default"].createElement(_Comp["default"].ScrollPane, {
      className: TS.CL_SCROLL_PANE,
      style: S.SCROLL_DIV
    }, this._renderArticles(articles, onCloseItem, onRemoveUnder)));
  };

  return NewsPane;
}(_react.Component);

var _default = (0, _withTheme["default"])(NewsPane);

exports["default"] = _default;
//# sourceMappingURL=NewsPane.js.map