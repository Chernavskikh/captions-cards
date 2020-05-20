/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import SearchForm from 'components/SearchForm';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import { uniq } from 'lodash';
import { getTagsData, getCaptionsData } from './actions';
import saga from './saga';

function HomePage(props) {
  useEffect(() => {
    props.getTags();
    props.getCaptions();
  }, []);

  return (
    <Container>
      <SearchForm tagOptions={props.tagOptions} />
    </Container>
  );
}

const mapStateToProps = state => ({
  tagOptions: uniq(state.capCards.tags).map(i => ({
    title: i,
  })),
  isDataLoading: state.capCards.loading,
});

const mapDispatchToProps = dispatch => ({
  getTags: () => dispatch(getTagsData()),
  getCaptions: () => dispatch(getCaptionsData()),
});

HomePage.propTypes = {
  getTags: PropTypes.func,
  getCaptions: PropTypes.func,
  tagOptions: PropTypes.array,
};
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withSaga,
  withConnect,
)(HomePage);
export { mapDispatchToProps };
