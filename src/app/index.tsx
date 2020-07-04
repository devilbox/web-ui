import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container, CssBaseline, Box } from '@material-ui/core';
import {
  createMuiTheme,
  ThemeProvider,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

import { GlobalStyle } from 'styles/global-styles';

import HomePage from './pages/Home/Loadable';
import MailsPage from './pages/Mails/Loadable';
import VhostsPage from './pages/Vhosts/Loadable';
import NotFoundPage from './pages/NotFound/Loadable';
import Header from './containers/Header';
import Footer from './components/Footer';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    content: {
      paddingTop: theme.spacing(4),
      flex: '1 1 auto',
    },
  }),
);

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s &ndash; devilbox" defaultTitle="devilbox">
        <meta name="description" content="The web UI for devilbox" />
      </Helmet>

      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Box className={classes.root}>
          <Header />

          <Container className={classes.content}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/mails" component={MailsPage} />
              <Route exact path="/vhosts" component={VhostsPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Container>

          <Footer />
        </Box>
      </ThemeProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
