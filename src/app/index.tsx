import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/Home/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import Header from './components/Header';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => (
  <BrowserRouter>
    <Helmet titleTemplate="%s &ndash; Devilbox" defaultTitle="Devilbox">
      <meta name="description" content="The web UI for Devilbox" />
    </Helmet>

    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Header />

      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </ThemeProvider>

    <GlobalStyle />
  </BrowserRouter>
);

export default App;
