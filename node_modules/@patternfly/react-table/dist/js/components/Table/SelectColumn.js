'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  onSelect: _propTypes2.default.func
};
var defaultProps = {
  children: null,
  className: '',
  onSelect: null
};

var SelectColumn = function SelectColumn(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onSelect = _ref.onSelect,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'onSelect']);

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement('input', _extends({}, props, { type: 'checkbox', onChange: onSelect })),
    children
  );
};

SelectColumn.propTypes = propTypes;
SelectColumn.defaultProps = defaultProps;

exports.default = SelectColumn;