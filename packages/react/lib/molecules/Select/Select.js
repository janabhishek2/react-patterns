"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("@react-patterns/scss/lib/CustomSelect.css");
var _Down = _interopRequireDefault(require("./Down.js"));
var _Up = _interopRequireDefault(require("./Up.js"));
var _Tick = _interopRequireDefault(require("./Tick.js"));
var _Text = _interopRequireDefault(require("@react-patterns/react/lib/atoms/Text"));
var _Color = _interopRequireDefault(require("@react-patterns/react/lib/atoms/Color"));
var _Margin = _interopRequireDefault(require("@react-patterns/react/lib/atoms/Margin"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Select = function Select(props) {
  var optionSelectCallback = props.onOptionSelect,
    options = props.options,
    label = props.label,
    _props$defaultSelecte = props.defaultSelected,
    defaultSelected = _props$defaultSelecte === void 0 ? null : _props$defaultSelecte,
    renderOption = props.renderOption;

  /* States for the Select */

  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setIsOpen = _useState2[1];
  var triggerbuttonRef = (0, _react.useRef)(null);
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    triggerButtonHeight = _useState4[0],
    setTriggerButtonHeight = _useState4[1];
  var _useState5 = (0, _react.useState)(defaultSelected ? options.find(function (item) {
      return item.value.toLowerCase() === defaultSelected;
    }) : null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedOption = _useState6[0],
    setSelectedOption = _useState6[1];

  /* Event handlers */

  var onOptionSelect = function onOptionSelect(option, index) {
    setSelectedOption(option);
    setIsOpen(false);
    if (optionSelectCallback) {
      optionSelectCallback(option, index);
    }
  };
  var toggleOpen = function toggleOpen() {
    setIsOpen(!open);
  };

  /* Side Effects */

  (0, _react.useEffect)(function () {
    if (triggerbuttonRef !== null && triggerbuttonRef !== void 0 && triggerbuttonRef.current) {
      var _triggerbuttonRef$cur;
      setTriggerButtonHeight(((triggerbuttonRef === null || triggerbuttonRef === void 0 || (_triggerbuttonRef$cur = triggerbuttonRef.current) === null || _triggerbuttonRef$cur === void 0 ? void 0 : _triggerbuttonRef$cur.offsetHeight) || 0) + 10);
    }
  }, [triggerbuttonRef === null || triggerbuttonRef === void 0 ? void 0 : triggerbuttonRef.current]);

  /* Function variables */
  var selectedOptionLabel = "";
  if (selectedOption) {
    selectedOptionLabel = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label;
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dse-select"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    ref: triggerbuttonRef,
    className: "dse-select__label",
    onClick: toggleOpen,
    "data-testid": "selectButtonTrigger"
  }, /*#__PURE__*/_react["default"].createElement(_Text["default"], null, selectedOption ? selectedOptionLabel : label), /*#__PURE__*/_react["default"].createElement("span", null, open ? /*#__PURE__*/_react["default"].createElement(_Up["default"], {
    width: "1rem",
    height: "1rem"
  }) : /*#__PURE__*/_react["default"].createElement(_Down["default"], {
    width: "1rem",
    height: "1rem"
  }))), open && /*#__PURE__*/_react["default"].createElement("ul", {
    className: "dse-select__overlay",
    style: {
      top: triggerButtonHeight
    }
  }, options.map(function (option, index) {
    var label = option.label,
      value = option.value;
    var isSelected = (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) === value;
    {/* Render props pattern */}
    if (renderOption) {
      {/* Get props pattern in getOptionRecommendedProps */}
      var renderOptionProps = {
        option: option,
        isSelected: isSelected,
        getOptionRecommendedProps: function getOptionRecommendedProps() {
          var overrideProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return _objectSpread({
            className: isSelected ? "dse-select__list-item--selected" : "dse-select__list-item",
            key: value,
            onClick: function onClick() {
              return onOptionSelect(option, index);
            }
          }, overrideProps);
        }
      };
      return renderOption(renderOptionProps);
    }
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) === value ? "dse-select__list-item--selected" : "dse-select__list-item",
      onClick: function onClick() {
        return onOptionSelect(option, index);
      },
      key: value,
      role: "menuitemradio"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "dse-select__list-item__label"
    }, /*#__PURE__*/_react["default"].createElement(_Color["default"], {
      hexCode: value.toLowerCase(),
      width: "sm",
      height: "sm"
    }), /*#__PURE__*/_react["default"].createElement(_Margin["default"], {
      left: "sm"
    }, label)), (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) === value && /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_Tick["default"], {
      width: "1.5rem",
      height: "1rem"
    })));
  })));
};
Select.propTypes = {
  onOptionSelect: _propTypes["default"].func,
  options: _propTypes["default"].array,
  label: _propTypes["default"].string,
  defaultSelected: _propTypes["default"].string,
  renderOption: _propTypes["default"].func
};
Select.defaultProps = {
  onOptionSelect: function onOptionSelect() {},
  options: [],
  label: "Select",
  defaultSelected: null,
  renderOption: undefined
};
var _default = exports["default"] = Select;