import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import Stack from '../../components/Stack';
import Panel from '../../components/Panel';
import Dictionary from '../../components/Dictionary';
import saga from '../../containers/App/saga';
import {
  makeStacksSelector,
  makeCoreVersionSelector,
  makeUIVersionSelector,
  makeHealthPercentageSelector,
} from '../../containers/App/selectors';
import { sliceKey, reducer } from '../../containers/App/slice';

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

  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga });

  const stacks = useSelector(makeStacksSelector);
  const versionCore = useSelector(makeCoreVersionSelector);
  const versionUI = useSelector(makeUIVersionSelector);
  const healthPercentage = useSelector(makeHealthPercentageSelector);

  const renderStacks = () => {
    if (!stacks) {
      return undefined;
    }

    return stacks.map(stack => (
      <Grid item xs={4} key={`grid_${stack.id}`}>
        <Stack id={stack.id} text={stack.text} />
      </Grid>
    ));
  };

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
                    items={[{ title: 'devilbox core', value: versionCore }]}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Dictionary
                    items={[{ title: 'devilbox UI', value: versionUI }]}
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
            <Panel name="Health">
              {new Intl.NumberFormat(undefined, { style: 'percent' }).format(
                healthPercentage,
              )}
            </Panel>
          </Grid>
          {renderStacks()}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
