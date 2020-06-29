import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@material-ui/core';

const Vhosts = () => (
  <>
    <Helmet>
      <title>Vhosts</title>
      <meta name="description" content="Devilbox Web-UI" />
    </Helmet>
    <Container>
      <Typography variant="h1" component="h2" gutterBottom>
        Virtual hosts
      </Typography>

      <Typography variant="body1" gutterBottom>
        Content
      </Typography>
    </Container>
  </>
);

export default Vhosts;
