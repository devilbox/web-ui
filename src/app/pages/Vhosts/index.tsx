import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@material-ui/core';
import DefaultContent from './components/Default';
import Table from './components/Table';

interface Props {
  vhosts: string[];
}

const Vhosts = ({ vhosts }: Props) => (
  <>
    <Helmet>
      <title>Vhosts</title>
      <meta name="description" content="Devilbox Web-UI" />
    </Helmet>
    <Container>
      <Typography variant="h1" component="h2" gutterBottom>
        Virtual hosts
      </Typography>

      {vhosts ? <Table /> : <DefaultContent />}
    </Container>
  </>
);

Vhosts.defaultProps = {
  vhosts: ['1'],
};

export default Vhosts;
