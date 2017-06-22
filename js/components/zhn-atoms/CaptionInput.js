'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  KEY: {
    textDecoration: 'underline'
  }
};

var CaptionInput = function CaptionInput(_ref) {
  var rootStyle = _ref.rootStyle,
      _ref$caption = _ref.caption,
      caption = _ref$caption === undefined ? '' : _ref$caption,
      accessKey = _ref.accessKey;

  var _index = caption.toLowerCase().indexOf(accessKey);
  if (accessKey && _index !== -1) {
    var _before = caption.substring(0, _index),
        _key = caption.substring(_index, _index + 1),
        _after = caption.substring(_index + 1);
    return _react2.default.createElement(
      'span',
      { style: rootStyle },
      _react2.default.createElement(
        'span',
        null,
        _before
      ),
      _react2.default.createElement(
        'span',
        { style: S.KEY },
        _key
      ),
      _react2.default.createElement(
        'span',
        null,
        _after
      )
    );
  } else {
    return _react2.default.createElement(
      'span',
      { style: rootStyle },
      caption
    );
  }
};

exports.default = CaptionInput;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-atoms\CaptionInput.js.map