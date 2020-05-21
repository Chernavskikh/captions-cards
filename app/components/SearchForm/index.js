/**
 *
 * SearchForm.js
 *
 */

import React from 'react';
import { Search, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Tag from 'components/Tag/';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [],
      searchValue: '',
      results: [],
      // eslint-disable-next-line react/no-unused-state
      selectedTags: [],
    };
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      options: nextProps.tagOptions,
    };
  }

  // eslint-disable-next-line consistent-return
  handleSearchChange = (e, { value }) => {
    this.setState({ searchValue: value });
    const keyword = value.toLowerCase();
    const optionsData = this.state.options;

    const filteredResults = optionsData.filter(function(obj) {
      const objTitle = obj.title.toLowerCase();
      return objTitle.indexOf(keyword) > -1;
    });

    this.setState({
      results: filteredResults,
    });
  };

  handleResultSelect = (e, { result }) => {
    // TODO: prevent duplicated select
    this.setState(prevState => ({
      selectedTags: [...prevState.selectedTags, result.title],
      // clear query after select
      searchValue: '',
    }));
  };

  removeSelectedTag = tag => {
    console.log('triggered', tag);
    const array = [...this.state.selectedTags]; // make a separate copy of the array
    const index = array.indexOf(tag);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ selectedTags: array });
    }
  };

  render() {
    const tags = this.state.selectedTags.map(value => (
      <Tag key={value} queryText={value} removeHandler={this.removeSelectedTag} />
    ));

    return (
      <div className="mb-20 mt-20">
        <Header size="large">Search captions by tags</Header>

        <Search
          className="mb-20 mt-20"
          value={this.state.searchValue}
          input={{ icon: 'search' }}
          onSearchChange={this.handleSearchChange}
          onResultSelect={this.handleResultSelect}
          results={this.state.results}
        />

        <div>{tags}</div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  tagOptions: PropTypes.array,
};

export default SearchForm;
