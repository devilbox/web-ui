import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@material-ui/core';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Devilbox homepage" />
      </Helmet>
      <Container>
        <Typography variant="h1" component="h2" gutterBottom>
          Home
        </Typography>

        <Typography variant="body1" gutterBottom>
          Content
        </Typography>
      </Container>
    </>
  );
}
