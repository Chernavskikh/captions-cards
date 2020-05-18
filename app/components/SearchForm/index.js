/**
 *
 * SearchForm.js
 *
 */

import React from 'react';
import { Search, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: props.tagOptions,
      searchValue: '',
      results: [],
    };
  }

  // eslint-disable-next-line consistent-return
  handleSearchChange = (e, { value }) => {
    this.setState({ searchValue: value });
    const keyword = value.toLowerCase();
    const filteredResults = this.state.options.filter(function(obj) {
      const objTitle = obj.title.toLowerCase();
      return objTitle.indexOf(keyword) > -1;
    });

    this.setState({
      results: filteredResults,
    });
  };

  render() {
    return (
      <div className="mb-20 mt-20">
        <Header size="large">Search captions by tags</Header>

        <Search
          className="mb-20 mt-20"
          value={this.state.searchValue}
          input={{ icon: 'search' }}
          onSearchChange={this.handleSearchChange}
          results={this.state.results}
        />
      </div>
    );
  }
}

SearchForm.propTypes = {
  tagOptions: PropTypes.array,
};

export default SearchForm;
