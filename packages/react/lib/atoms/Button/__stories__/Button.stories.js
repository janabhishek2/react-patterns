"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DefaultButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("../Button"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = {
  title: "Atoms/Button",
  component: _Button["default"]
};
var DefaultButton = exports.DefaultButton = {
  render: function render(props) {
    return /*#__PURE__*/_react["default"].createElement(_Button["default"], props);
  },
  args: {}
};