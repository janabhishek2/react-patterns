"use strict";

var _react = _interopRequireDefault(require("react"));
var _Select = _interopRequireDefault(require("../Select"));
var _react2 = require("@testing-library/react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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
describe('Select Test cases', function () {
  test('render the component snapshot', function () {
    var _render = (0, _react2.render)(/*#__PURE__*/_react["default"].createElement(_Select["default"], {
        options: DEFAULT_COLOR_OPTIONS,
        label: "Select a color"
      })),
      asFragment = _render.asFragment;
    expect(asFragment()).toMatchSnapshot();
  });
  test('after clicking the button, should display the correct number of options', function () {
    var _render2 = (0, _react2.render)(/*#__PURE__*/_react["default"].createElement(_Select["default"], {
        options: DEFAULT_COLOR_OPTIONS,
        label: "Select a color"
      })),
      asFragment = _render2.asFragment,
      getByTestId = _render2.getByTestId,
      getAllByRole = _render2.getAllByRole;

    // Click the trigger
    _react2.fireEvent.click(getByTestId("selectButtonTrigger"));

    // Expect "role="menuitemradio"" to have length 3
    expect(getAllByRole("menuitemradio")).toHaveLength(3);
    expect(asFragment()).toMatchSnapshot();
  });
  test('should call "onOptionSelect" with option and index if passed', function () {
    var optionSelectMock = jest.fn();
    var _render3 = (0, _react2.render)(/*#__PURE__*/_react["default"].createElement(_Select["default"], {
        options: DEFAULT_COLOR_OPTIONS,
        label: "Select a color",
        onOptionSelect: optionSelectMock
      })),
      getByTestId = _render3.getByTestId,
      getAllByRole = _render3.getAllByRole;

    // Click the trigger
    _react2.fireEvent.click(getByTestId("selectButtonTrigger"));

    //  Select a color ex pink

    _react2.fireEvent.click(getAllByRole("menuitemradio")[0]);
    expect(optionSelectMock).toHaveBeenCalled();
    expect(optionSelectMock).toHaveBeenCalledWith(DEFAULT_COLOR_OPTIONS[0], 0);
  });
  test('The button label changes to selected option label', function () {
    var _render4 = (0, _react2.render)(/*#__PURE__*/_react["default"].createElement(_Select["default"], {
        options: DEFAULT_COLOR_OPTIONS,
        label: "Select a color"
      })),
      getByTestId = _render4.getByTestId,
      getAllByRole = _render4.getAllByRole;

    // Click the trigger
    _react2.fireEvent.click(getByTestId("selectButtonTrigger"));

    //  Select a color ex pink

    _react2.fireEvent.click(getAllByRole("menuitemradio")[0]);
    expect(getByTestId("selectButtonTrigger")).toHaveTextContent(/pink/i);
  });
  test('Snapshot of selected option state: pink', function () {
    var _render5 = (0, _react2.render)(/*#__PURE__*/_react["default"].createElement(_Select["default"], {
        options: DEFAULT_COLOR_OPTIONS,
        label: "Select a color"
      })),
      asFragment = _render5.asFragment,
      getByTestId = _render5.getByTestId,
      getAllByRole = _render5.getAllByRole;

    // Click the trigger
    _react2.fireEvent.click(getByTestId("selectButtonTrigger"));

    //  Select a color ex pink

    _react2.fireEvent.click(getAllByRole("menuitemradio")[0]);
    expect(asFragment()).toMatchSnapshot();
  });
});