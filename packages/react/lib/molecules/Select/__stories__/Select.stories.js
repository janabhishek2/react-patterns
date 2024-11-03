"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SelectWithRenderOptions = exports.SelectWithPinkSelected = exports.SelectWithOptions = void 0;
var _react = _interopRequireDefault(require("react"));
var _Select = _interopRequireDefault(require("../Select"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = {
  title: "Molecules/Select",
  component: _Select["default"]
};
var DEFAULT_COLOR_OPTIONS = [{
  label: "Pink",
  value: "Pink"
}, {
  label: "Green",
  value: "Green"
}, {
  label: "Orange",
  value: "Orange"
}];
var SelectWithOptions = exports.SelectWithOptions = {
  render: function render(props) {
    return /*#__PURE__*/_react["default"].createElement(_Select["default"], props);
  },
  args: {
    options: DEFAULT_COLOR_OPTIONS,
    label: "Select a color ?"
  }
};
var SelectWithPinkSelected = exports.SelectWithPinkSelected = {
  render: function render(props) {
    return /*#__PURE__*/_react["default"].createElement(_Select["default"], props);
  },
  args: {
    options: DEFAULT_COLOR_OPTIONS,
    label: "Select a color",
    defaultSelected: "pink"
  }
};
var SelectWithRenderOptions = exports.SelectWithRenderOptions = {
  render: function render(props) {
    return /*#__PURE__*/_react["default"].createElement(_Select["default"], props);
  },
  args: {
    options: DEFAULT_COLOR_OPTIONS,
    label: "Select a color",
    renderOption: function renderOption(_ref) {
      var option = _ref.option,
        isSelected = _ref.isSelected,
        _ref$getOptionRecomme = _ref.getOptionRecommendedProps,
        getOptionRecommendedProps = _ref$getOptionRecomme === void 0 ? function () {
          return {};
        } : _ref$getOptionRecomme;
      return /*#__PURE__*/_react["default"].createElement("li", getOptionRecommendedProps(), option.label + " " + (isSelected && "Selected!!"));
    }
  }
};