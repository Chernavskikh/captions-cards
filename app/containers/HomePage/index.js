/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Container } from 'semantic-ui-react';
import SearchForm from 'components/SearchForm';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import { getData } from './actions';
import saga from './saga';

function HomePage(props) {
  return (
    <Container>
      <SearchForm
        getCaptions={props.getCaptions}
        isDataLoading={props.isDataLoading}
      />
    </Container>
  );
}

const mapStateToProps = state => ({
  cards: state.capCards.captions,
  isDataLoading: state.capCards.loading,
});

const mapDispatchToProps = dispatch => ({
  getCaptions: () => dispatch(getData()),
});

HomePage.propTypes = {
  getCaptions: PropTypes.func,
  isDataLoading: PropTypes.bool,
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
