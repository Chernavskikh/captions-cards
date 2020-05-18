/**
 *
 * Tag.js
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import TagCrossButton from './TagCrossButton';
import TagStyled from './TagStyled';

function Tag(props) {
  return (
    <TagStyled>
      {props.queryText}
      <TagCrossButton
        type="button"
        onClick={() => {
          props.removeHandler(props.id);
        }}
      >
        &#10005;
      </TagCrossButton>
    </TagStyled>
  );
}

Tag.propTypes = {
  queryText: PropTypes.string.isRequired,
  removeHandler: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Tag;
