var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

var HeaderCell = function HeaderCell(_ref) {
  var dataLabel = _ref['data-label'],
      isVisible = _ref.isVisible,
      scope = _ref.scope,
      Component = _ref.component,
      props = _objectWithoutProperties(_ref, ['data-label', 'isVisible', 'scope', 'component']);

  var mappedProps = _extends({}, scope ? { scope: scope } : {}, props);
  return React.createElement(Component, mappedProps);
};

HeaderCell.propTypes = {
  'data-label': PropTypes.string,
  scope: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number])
};

HeaderCell.defaultProps = {
  scope: '',
  component: 'th',
  'data-label': ''
};

export default HeaderCell;