'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactStyles = require('@patternfly/react-styles');

var _tableCss = require('../../../../@patternfly/patternfly/components/Table/table.css.js');

var _tableCss2 = _interopRequireDefault(_tableCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (width) {
  return function () {
    return {
      className: (0, _reactStyles.css)((0, _reactStyles.getModifier)(_tableCss2.default, 'width-' + width))
    };
  };
};