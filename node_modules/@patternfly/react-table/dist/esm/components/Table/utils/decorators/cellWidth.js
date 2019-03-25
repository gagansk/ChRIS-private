import { css, getModifier } from '@patternfly/react-styles';
import styles from '../../../../@patternfly/patternfly/components/Table/table.css.js';

export default (function (width) {
  return function () {
    return {
      className: css(getModifier(styles, 'width-' + width))
    };
  };
});