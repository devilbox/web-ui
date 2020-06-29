import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { GlobalStyle } from 'styles/global-styles';

import HomePage from './pages/Home/Loadable';
import MailsPage from './pages/Mails/Loadable';
import VhostsPage from './pages/Vhosts/Loadable';
import NotFoundPage from './pages/NotFound/Loadable';
import Header from './components/Header';
import Footer from './components/Footer';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => (
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

      <Footer />
    </ThemeProvider>

    <GlobalStyle />
  </BrowserRouter>
);

export default App;
