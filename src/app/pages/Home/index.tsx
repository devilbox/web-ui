import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Stack from '../../components/Stack';
import Panel from '../../components/Panel';
import Dictionary from '../../components/Dictionary';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(4),
    },
    logo: {
      maxWidth: '100%',
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

      <Container className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Panel name="Version">
              <Grid container>
                <Grid item xs={6}>
                  <Dictionary
                    items={[
                      { title: 'devilbox core', value: 'v1.7.0 (2020-03-24)' },
                    ]}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Dictionary
                    items={[{ title: 'devilbox UI', value: 'v0.1.2' }]}
                  />
                </Grid>
              </Grid>
            </Panel>
          </Grid>
          <Grid item xs={4}>
            <img
              src={`${process.env.PUBLIC_URL}/logo/long/banner_512_trans.png`}
              alt="logo"
              className={classes.logo}
            />
          </Grid>
          <Grid item xs={4}>
            <Panel name="Health">100%</Panel>
          </Grid>
          <Grid item xs={4}>
            <Stack
              name="Base Stack"
              containers={[
                {
                  id: 'bind',
                  name: 'Bind',
                  version: '9.11.3-1',
                  status: 'running',
                },
                {
                  id: 'php',
                  name: 'PHP',
                  version: '7.3.16',
                  status: 'running',
                },
                {
                  id: 'apache',
                  name: 'Apache',
                  version: '2.4.41',
                  status: 'running',
                },
              ]}
            />
          </Grid>
          <Grid item xs={4}>
            <Stack
              name="SQL Stack"
              containers={[
                {
                  id: 'mariadb',
                  name: 'mariadb',
                  version: '10.3.22',
                  status: 'running',
                },
                {
                  id: 'postgresql',
                  name: 'PostgreSQL',
                  version: '12.1',
                  status: 'running',
                },
              ]}
            />
          </Grid>
          <Grid item xs={4}>
            <Stack
              name="Base Stack"
              containers={[
                {
                  id: 'redis',
                  name: 'Redis',
                  version: '5.0.9',
                  status: 'running',
                },
                {
                  id: 'memcached',
                  name: 'Memcached',
                  version: '1.5.22',
                  status: 'running',
                },
                {
                  id: 'mongodb',
                  name: 'MongoDB',
                  version: '4.2.8',
                  status: 'running',
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
