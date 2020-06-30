import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      maxWidth: '100%',
      margin: theme.spacing(4, 0),
    },
  }),
);

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Devilbox Web-UI" />
      </Helmet>
      <Container>
        <img
          src={`${process.env.PUBLIC_URL}/logo/long/banner_512_trans.png`}
          alt="devilbox logo"
          className={classes.logo}
        />

        <Typography variant="body1" gutterBottom>
          Content
        </Typography>
      </Container>
    </>
  );
};

export default Home;
