var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableContext } from '../components/Table/Table';
import { TableHeader } from '../components/Table';

export var withContext = function withContext(_ref) {
  var _ref$context = _ref.context,
      context = _ref$context === undefined ? {} : _ref$context,
      _ref$contextType = _ref.contextType,
      contextType = _ref$contextType === undefined ? {} : _ref$contextType;
  return function (WrappedComponent) {
    var WithContext = function (_Component) {
      _inherits(WithContext, _Component);

      function WithContext() {
        _classCallCheck(this, WithContext);

        return _possibleConstructorReturn(this, (WithContext.__proto__ || Object.getPrototypeOf(WithContext)).apply(this, arguments));
      }

      _createClass(WithContext, [{
        key: 'getChildContext',
        value: function getChildContext() {
          return context;
        }
      }, {
        key: 'render',
        value: function render() {
          return React.createElement(
            WrappedComponent,
            null,
            this.props.children
          );
        }
      }]);

      return WithContext;
    }(Component);

    WithContext.WrappedComponent = WrappedComponent;
    WithContext.childContextTypes = contextType;

    return WithContext;
  };
};

export var TableProvider = withContext({
  context: {
    columns: [],
    renderers: {
      header: {
        wrapper: 'thead',
        row: 'tr',
        cell: 'th'
      }
    }
  },
  contextType: { columns: PropTypes.any, renderers: PropTypes.any }
})('table');

export default (function (_ref2) {
  var updateFunc = _ref2.updateFunc,
      columns = _ref2.columns;
  return React.createElement(
    TableContext.Provider,
    { value: { updateHeaderData: updateFunc } },
    React.createElement(
      TableProvider,
      null,
      React.createElement(TableHeader, { headerRows: columns })
    )
  );
});