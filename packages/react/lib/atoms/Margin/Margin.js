"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactFoundation = require("@react-patterns/react-foundation");
require("@react-patterns/scss/lib/Utilities.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
console.log(Object.keys(_reactFoundation.SPACING));
var Margin = function Margin(props) {
  var _props$left = props.left,
    left = _props$left === void 0 ? 'none' : _props$left,
    _props$right = props.right,
    right = _props$right === void 0 ? 'none' : _props$right,
    _props$bottom = props.bottom,
    bottom = _props$bottom === void 0 ? 'none' : _props$bottom,
    _props$top = props.top,
    top = _props$top === void 0 ? 'none' : _props$top,
    _props$children = props.children,
    children = _props$children === void 0 ? null : _props$children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dse-margin-left-".concat(left, " dse-margin-right-").concat(right, " dse-margin-top-").concat(top, " dse-margin-bottom-").concat(bottom)
  }, children);
};
Margin.propTypes = {
  left: _propTypes["default"].oneOf(Object.keys(_reactFoundation.SPACING)),
  right: _propTypes["default"].oneOf(Object.keys(_reactFoundation.SPACING)),
  bottom: _propTypes["default"].oneOf(Object.keys(_reactFoundation.SPACING)),
  top: _propTypes["default"].oneOf(Object.keys(_reactFoundation.SPACING)),
  children: _propTypes["default"].node
};
var _default = exports["default"] = Margin;