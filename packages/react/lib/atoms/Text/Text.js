"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Text;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactFoundation = require("@react-patterns/react-foundation");
require("@react-patterns/scss/lib/Text.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Text(props) {
  var size = props.size,
    children = props.children;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "dse-text-".concat(size)
  }, children);
}
;
Text.propTypes = {
  size: _propTypes["default"].oneOf(Object.keys(_reactFoundation.TextSizes)),
  children: _propTypes["default"].node
};
Text.defaultProps = {
  size: "base",
  children: null
};