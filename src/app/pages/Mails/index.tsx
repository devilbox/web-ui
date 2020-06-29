import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@material-ui/core';

const Mails = () => (
  <>
    <Helmet>
      <title>Mails</title>
      <meta name="description" content="Devilbox Web-UI" />
    </Helmet>
    <Container>
      <Typography variant="h1" component="h2" gutterBottom>
        Mails
      </Typography>

      <Typography variant="body1" gutterBottom>
        Content
      </Typography>
    </Container>
  </>
);

export default Mails;
