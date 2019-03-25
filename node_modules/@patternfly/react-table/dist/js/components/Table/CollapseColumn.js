'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _angleDownIcon = require('@patternfly/react-icons/dist/js/icons/angle-down-icon');

var _angleDownIcon2 = _interopRequireDefault(_angleDownIcon);

var _angleRightIcon = require('@patternfly/react-icons/dist/js/icons/angle-right-icon');

var _angleRightIcon2 = _interopRequireDefault(_angleRightIcon);

var _reactStyles = require('@patternfly/react-styles');

var _reactCore = require('@patternfly/react-core');

var _tableCss = require('../../@patternfly/patternfly/components/Table/table.css.js');

var _tableCss2 = _interopRequireDefault(_tableCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  children: _propTypes2.default.node,
  onToggle: _propTypes2.default.func,
  isOpen: _propTypes2.default.bool
};
var defaultProps = {
  children: null,
  isOpen: undefined,
  onToggle: null
};

var CollapseColumn = function CollapseColumn(_ref) {
  var children = _ref.children,
      onToggle = _ref.onToggle,
      isOpen = _ref.isOpen,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'onToggle', 'isOpen', 'className']);

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    isOpen !== undefined && _react2.default.createElement(
      _reactCore.Button,
      _extends({
        className: (0, _reactStyles.css)(className, isOpen && _tableCss2.default.modifiers.expanded)
      }, props, {
        variant: 'plain',
        'aria-label': 'Details',
        onClick: onToggle,
        'aria-expanded': isOpen
      }),
      isOpen ? _react2.default.createElement(_angleDownIcon2.default, null) : _react2.default.createElement(_angleRightIcon2.default, null)
    ),
    children
  );
};

CollapseColumn.propTypes = propTypes;
CollapseColumn.defaultProps = defaultProps;

exports.default = CollapseColumn;