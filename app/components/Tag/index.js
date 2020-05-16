/**
 *
 * Tag.js
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function Tag(props) {
  return (
    <span>
      {props.queryText}
      <button
        type="button"
        onClick={() => {
          props.removeHandler(props.id);
        }}
      >
        x
      </button>
    </span>
  );
}

Tag.propTypes = {
  queryText: PropTypes.string.isRequired,
  removeHandler: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Tag;
