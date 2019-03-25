var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

var propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onSelect: PropTypes.func
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

  return React.createElement(
    React.Fragment,
    null,
    React.createElement('input', _extends({}, props, { type: 'checkbox', onChange: onSelect })),
    children
  );
};

SelectColumn.propTypes = propTypes;
SelectColumn.defaultProps = defaultProps;

export default SelectColumn;