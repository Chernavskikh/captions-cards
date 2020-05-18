/**
 *
 * SearchForm.js
 *
 */

import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Tag from '../Tag';

function SearchForm(props) {
  const [query, setQuery] = useState('');
  const [queryTags, queryTagsHandler] = useState([]);

  function keyPress(e) {
    if (e.key === 'Enter') {
      queryTagsHandler(arr => arr.concat(query));
      setQuery('');
    }
  }

  function removeTag(id) {
    const index = queryTags.indexOf(id);
    queryTagsHandler(arr => arr.filter((item, i) => i !== index));
  }

  return (
    <div>
      <Input
        className="mb-20 mt-20"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={keyPress}
      />

      <Button
        type="button"
        className="ui primary button"
        onClick={props.getCaptions}
        loading={props.isDataLoading}
      >
        Fetch captions
      </Button>

      <div>
        {/* TODO: add unique key generator here to avoid duplicated keys */}
        {queryTags.map(item => (
          <Tag
            queryText={item}
            key={item}
            id={item}
            removeHandler={removeTag}
          />
        ))}
      </div>
    </div>
  );
}

SearchForm.propTypes = {
  getCaptions: PropTypes.func.isRequired,
  isDataLoading: PropTypes.bool,
};

export default SearchForm;
