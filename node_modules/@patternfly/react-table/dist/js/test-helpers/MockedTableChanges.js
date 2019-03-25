'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableProvider = exports.withContext = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Table = require('../components/Table/Table');

var _Table2 = require('../components/Table');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withContext = exports.withContext = function withContext(_ref) {
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
          return _react2.default.createElement(
            WrappedComponent,
            null,
            this.props.children
          );
        }
      }]);

      return WithContext;
    }(_react.Component);

    WithContext.WrappedComponent = WrappedComponent;
    WithContext.childContextTypes = contextType;

    return WithContext;
  };
};

var TableProvider = exports.TableProvider = withContext({
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
  contextType: { columns: _propTypes2.default.any, renderers: _propTypes2.default.any }
})('table');

exports.default = function (_ref2) {
  var updateFunc = _ref2.updateFunc,
      columns = _ref2.columns;
  return _react2.default.createElement(
    _Table.TableContext.Provider,
    { value: { updateHeaderData: updateFunc } },
    _react2.default.createElement(
      TableProvider,
      null,
      _react2.default.createElement(_Table2.TableHeader, { headerRows: columns })
    )
  );
};