import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {
  Container,
  CssBaseline,
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  BugReport as BugReportIcon,
  SupervisedUserCircle as SupervisedUserCircleIcon,
} from '@material-ui/icons';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { GlobalStyle } from 'styles/global-styles';

import HomePage from './pages/Home/Loadable';
import MailsPage from './pages/Mails/Loadable';
import VhostsPage from './pages/Vhosts/Loadable';
import NotFoundPage from './pages/NotFound/Loadable';
import Header from './components/Header';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const useStyles = makeStyles(() =>
  createStyles({
    stickToBottom: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
    },
    customBottomNavigationAction: {
      minWidth: 80,
      display: 'flex',
      alignItems: 'center',
    },
  }),
);

const App = () => {
  const classes = useStyles();

  console.log((window as any).pageLoadStart);

  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s &ndash; devilbox" defaultTitle="devilbox">
        <meta name="description" content="The web UI for devilbox" />
      </Helmet>

      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Header />

        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/mails" component={MailsPage} />
            <Route exact path="/vhosts" component={VhostsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Container>

        <BottomNavigation showLabels className={classes.stickToBottom}>
          <div className={classes.customBottomNavigationAction}>
            {window && (window as any).pageLoadStart
              ? `${new Intl.NumberFormat('en-US', {
                  style: 'decimal',
                  maximumFractionDigits: 2,
                }).format(
                  (new Date().getTime() - (window as any).pageLoadStart) / 1000,
                )} s`
              : 0}
          </div>

          <BottomNavigationAction
            label="Credits"
            icon={<SupervisedUserCircleIcon />}
          />
          <BottomNavigationAction label="Debug (0)" icon={<BugReportIcon />} />
        </BottomNavigation>
      </ThemeProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
