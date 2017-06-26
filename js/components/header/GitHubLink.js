"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GitHubLink = function GitHubLink(_ref) {
  var className = _ref.className,
      title = _ref.title,
      href = _ref.href;
  return _react2.default.createElement(
    "a",
    {
      className: className,
      title: title,
      href: href,
      tabIndex: "-1"
    },
    _react2.default.createElement(
      "svg",
      { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "1.414" },
      _react2.default.createElement(
        "title",
        null,
        "GitHub Logo"
      ),
      _react2.default.createElement("path", { d: "M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" })
    )
  );
};

/*
GitHubLink.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  href: PropTypes.string
}
*/

exports.default = GitHubLink;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\header\GitHubLink.js.map