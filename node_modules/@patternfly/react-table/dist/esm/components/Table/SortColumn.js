var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import LongArrowAltUpIcon from '@patternfly/react-icons/dist/esm/icons/long-arrow-alt-up-icon';
import LongArrowAltDownIcon from '@patternfly/react-icons/dist/esm/icons/long-arrow-alt-down-icon';
import ArrowsAltVIcon from '@patternfly/react-icons/dist/esm/icons/arrows-alt-v-icon';

import { css } from '@patternfly/react-styles';
import styles from '../../@patternfly/patternfly/components/Table/table.css.js';

var propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isSortedBy: PropTypes.bool,
  onSort: PropTypes.func,
  sortDirection: PropTypes.string
};
var defaultProps = {
  children: null,
  className: '',
  isSortedBy: false,
  onSort: null,
  sortDirection: ''
};

export var SortByDirection = {
  asc: 'asc',
  desc: 'desc'
};

var SortColumn = function SortColumn(_ref) {
  var isSortedBy = _ref.isSortedBy,
      children = _ref.children,
      className = _ref.className,
      onSort = _ref.onSort,
      sortDirection = _ref.sortDirection,
      props = _objectWithoutProperties(_ref, ['isSortedBy', 'children', 'className', 'onSort', 'sortDirection']);

  var SortedByIcon = isSortedBy ? sortDirection === 'asc' ? LongArrowAltUpIcon : LongArrowAltDownIcon : ArrowsAltVIcon;
  return React.createElement(
    'button',
    _extends({}, props, { className: css(className), onClick: function onClick(event) {
        return onSort && onSort(event);
      } }),
    children,
    React.createElement(
      'span',
      { className: css(styles.tableSortIndicator) },
      React.createElement(SortedByIcon, null)
    )
  );
};

SortColumn.propTypes = propTypes;
SortColumn.defaultProps = defaultProps;

export default SortColumn;