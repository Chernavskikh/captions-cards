/**
 *
 * SearchForm.js
 *
 */

import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import Tag from '../Tag';

function SearchForm() {
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
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={keyPress}
      />

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

export default SearchForm;
