/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Container } from 'semantic-ui-react';
import SearchForm from 'components/SearchForm';

export default function HomePage() {
  return (
    <Container>
      <SearchForm />
    </Container>
  );
}
