"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("@react-patterns/scss/lib/Utilities.css");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactFoundation = require("@react-patterns/react-foundation");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Color(props) {
  var hexCode = props.hexCode,
    _props$width = props.width,
    width = _props$width === void 0 ? "sm" : _props$width,
    _props$height = props.height,
    height = _props$height === void 0 ? "sm" : _props$height;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dse-width-".concat(width, " dse-height-").concat(height),
    style: {
      backgroundColor: hexCode
    }
  });
}
Color.propTypes = {
  hexCode: _propTypes["default"].string,
  width: _propTypes["default"].oneOf(Object.keys(_reactFoundation.SPACING)),
  height: _propTypes["default"].oneOf(Object.keys(_reactFoundation.SPACING))
};
var _default = exports["default"] = Color;