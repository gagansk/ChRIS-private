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

var HeaderCell = function HeaderCell(_ref) {
  var dataLabel = _ref['data-label'],
      isVisible = _ref.isVisible,
      scope = _ref.scope,
      Component = _ref.component,
      props = _objectWithoutProperties(_ref, ['data-label', 'isVisible', 'scope', 'component']);

  var mappedProps = _extends({}, scope ? { scope: scope } : {}, props);
  return _react2.default.createElement(Component, mappedProps);
};

HeaderCell.propTypes = {
  'data-label': _propTypes2.default.string,
  scope: _propTypes2.default.string,
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node, _propTypes2.default.number])
};

HeaderCell.defaultProps = {
  scope: '',
  component: 'th',
  'data-label': ''
};

exports.default = HeaderCell;