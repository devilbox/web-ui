import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import Stack from '../../components/Stack';
import Panel from '../../components/Panel';
import HealthBar from '../../components/HealthBar';
import Dictionary from '../../components/Dictionary';
import saga from './saga';
import {
  makeStacksSelector,
  makeCoreVersionSelector,
  makeUIVersionSelector,
  makeHealthPercentageSelector,
} from './selectors';
import { sliceKey, reducer, actions } from './slice';
import SettingsTable from './components/tables/Settings';
import ToolsTable from './components/tables/Tools';
import NetworkingTable from './components/tables/Networking';
import PortsTable from './components/tables/Ports';
import DataMountsTable from './components/tables/DataMounts';
import ConfigMountsTable from './components/tables/ConfigMounts';
import LogMountsTable from './components/tables/LogMounts';
import ServicesTable from './components/tables/Services';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      maxWidth: '100%',
    },
    panelWrapper: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
);

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga });

  useEffect(() => {
    dispatch(actions.fetchData());
  }, [dispatch]);

  const stacks = useSelector(makeStacksSelector);
  const versionCore = useSelector(makeCoreVersionSelector);
  const versionUI = useSelector(makeUIVersionSelector);
  const healthPercentage = useSelector(makeHealthPercentageSelector);

  const renderStacks = () => {
    if (!stacks) {
      return undefined;
    }

    return stacks.map(stack => (
      <Grid
        item
        xs={4}
        key={`grid_${stack.id}`}
        className={classes.panelWrapper}
      >
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

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4} className={classes.panelWrapper}>
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
          <Grid item xs={4} className={classes.panelWrapper}>
            <img
              src={`${process.env.PUBLIC_URL}/logo/long/banner_512_trans.png`}
              alt="logo"
              className={classes.logo}
            />
          </Grid>
          <Grid item xs={4} className={classes.panelWrapper}>
            <Panel name="Health">
              <HealthBar percentage={healthPercentage} />
            </Panel>
          </Grid>
          {renderStacks()}
          <Grid item xs={4} className={classes.panelWrapper}>
            <Panel name="PHP Container Setup">
              <Typography variant="body2">
                You can also enter the php container and work from inside. The
                following is available inside the container:
              </Typography>
            </Panel>
            <Panel>
              <SettingsTable />
            </Panel>
            <Panel>
              <ToolsTable />
            </Panel>
          </Grid>
          <Grid item xs={4} className={classes.panelWrapper} />
          <Grid item xs={4} className={classes.panelWrapper}>
            <Panel name="PHP Container Status">
              <Typography variant="body2">
                The PHP Docker can connect to the following services via the
                specified hostnames and IP addresses.
              </Typography>
            </Panel>
            <Panel>
              <ServicesTable />
            </Panel>
          </Grid>
          <Grid item xs={4} className={classes.panelWrapper}>
            <Panel name="Networking">
              <NetworkingTable />
            </Panel>
          </Grid>
          <Grid item xs={4} className={classes.panelWrapper} />
          <Grid item xs={4} className={classes.panelWrapper}>
            <Panel name="Ports">
              <PortsTable />
            </Panel>
          </Grid>
          <Grid item xs={4} className={classes.panelWrapper}>
            <Panel name="Data mounts">
              <DataMountsTable />
            </Panel>
          </Grid>
          <Grid item xs={4} className={classes.panelWrapper}>
            <Panel name="Config mounts">
              <ConfigMountsTable />
            </Panel>
          </Grid>
          <Grid item xs={4} className={classes.panelWrapper}>
            <Panel name="Log mounts">
              <LogMountsTable />
            </Panel>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
