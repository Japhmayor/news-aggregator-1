"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _crId = _interopRequireDefault(require("../../utils/crId"));

var CL = {
  SELECT: 'm-select',
  LABEL: 'm-select__label',
  DIV: 'm-textfield-input__div',
  INPUT: 'm-textfield-input',
  INPUT_LINE: 'm-input__line',
  INPUT_MSG_ERR: 'm-input__msg-err'
};
var S = {
  LABEL_TO_INPUT: {
    transform: 'scale(1) translate(0px, -6px)'
  },
  LABEL_ON_ERROR: {
    color: '#f44336'
  },
  LINE_ERROR: {
    borderBottom: '2px solid #F44336'
  }
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var TextField =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(TextField, _Component);

  function TextField(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._hFocusInput = function () {
      _this.isFocus = true;

      _this.forceUpdate();
    };

    _this._hBlurInput = function () {
      _this.isFocus = false;

      _this.forceUpdate();
    };

    _this._hInputChange = function (event) {
      var value = event.target.value;

      _this.setState({
        value: value,
        isPassTest: _this.isOnTest ? _this.props.onTest(value) : true
      });
    };

    _this._hKeyDown = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === 46 || keyCode === 27) {
        _this.setState({
          value: ''
        });
      } else if (keyCode === 13 && _this.isOnEnter) {
        _this.props.onEnter(event.target.value);
      }
    };

    var id = props.id,
        initValue = props.initValue,
        onTest = props.onTest,
        onEnter = props.onEnter;
    _this._id = id || (0, _crId["default"])();
    _this.isFocus = false;
    _this.isOnTest = _isFn(onTest);
    _this.isOnEnter = _isFn(onEnter);

    var _value = initValue || '';

    _this.state = {
      value: _value,
      isPassTest: _this.isOnTest ? onTest(_value) : true
    };
    return _this;
  }

  var _proto = TextField.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        rootStyle = _this$props.rootStyle,
        caption = _this$props.caption,
        _this$props$errorMsg = _this$props.errorMsg,
        errorMsg = _this$props$errorMsg === void 0 ? '' : _this$props$errorMsg,
        _this$state = this.state,
        value = _this$state.value,
        isPassTest = _this$state.isPassTest,
        _labelStyle = value || this.isFocus ? void 0 : S.LABEL_TO_INPUT,
        _labelErrStyle = isPassTest ? void 0 : S.LABEL_ON_ERROR,
        _lineStyle = isPassTest ? void 0 : S.LINE_ERROR;

    return _react["default"].createElement("div", {
      className: CL.SELECT,
      style: rootStyle
    }, _react["default"].createElement("label", {
      className: CL.LABEL,
      style: (0, _extends2["default"])({}, _labelStyle, {}, _labelErrStyle),
      htmlFor: this._id
    }, caption), _react["default"].createElement("div", {
      className: CL.DIV
    }, _react["default"].createElement("input", {
      id: this._id,
      type: "text",
      className: CL.INPUT,
      value: value,
      autoComplete: "new-text",
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: "false",
      translate: "false",
      onFocus: this._hFocusInput,
      onBlur: this._hBlurInput,
      onChange: this._hInputChange,
      onKeyDown: this._hKeyDown
    }), _react["default"].createElement("div", {
      className: CL.INPUT_LINE,
      style: _lineStyle
    }), _lineStyle && _react["default"].createElement("div", {
      className: CL.INPUT_MSG_ERR
    }, errorMsg)));
  };

  _proto.getValue = function getValue() {
    return String(this.state.value).trim();
  };

  return TextField;
}(_react.Component);

var _default = TextField;
exports["default"] = _default;
//# sourceMappingURL=TextField.js.map