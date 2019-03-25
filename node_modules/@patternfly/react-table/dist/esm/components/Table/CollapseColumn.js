var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';

import { css } from '@patternfly/react-styles';
import { Button } from '@patternfly/react-core';
import styles from '../../@patternfly/patternfly/components/Table/table.css.js';

var propTypes = {
  children: PropTypes.node,
  onToggle: PropTypes.func,
  isOpen: PropTypes.bool
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

  return React.createElement(
    React.Fragment,
    null,
    isOpen !== undefined && React.createElement(
      Button,
      _extends({
        className: css(className, isOpen && styles.modifiers.expanded)
      }, props, {
        variant: 'plain',
        'aria-label': 'Details',
        onClick: onToggle,
        'aria-expanded': isOpen
      }),
      isOpen ? React.createElement(AngleDownIcon, null) : React.createElement(AngleRightIcon, null)
    ),
    children
  );
};

CollapseColumn.propTypes = propTypes;
CollapseColumn.defaultProps = defaultProps;

export default CollapseColumn;