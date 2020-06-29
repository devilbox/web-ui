import React, { useState, MouseEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {
  Container,
  AppBar,
  Toolbar,
  Link,
  Typography,
  CssBaseline,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core';
import {
  createMuiTheme,
  ThemeProvider,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import {
  GitHub as GithubIcon,
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      maxWidth: 32,
      marginRight: theme.spacing(1),
    },
    title: {
      marginRight: theme.spacing(2),
    },
    linkItem: {
      margin: theme.spacing(0, 1, 0),
    },
    grow: {
      flexGrow: 1,
    },
    select: {
      margin: theme.spacing(0, 0.5, 0, 1),
    },
  }),
);

const DATABASES = [
  {
    id: 'mysql',
    url: 'http://localhost/db_mysql.php',
    text: 'MySQL',
  },
  {
    id: 'pgsql',
    url: 'http://localhost/db_pgsql.php',
    text: 'PgSQL',
  },
  {
    id: 'mongodb',
    url: 'http://localhost/db_mongo.php',
    text: 'MongoDB',
  },
  {
    id: 'redis',
    url: 'http://localhost/db_redis.php',
    text: 'Redis',
  },
  {
    id: 'memcached',
    url: 'http://localhost/db_memcd.php',
    text: 'Memcached',
  },
];

const INFOS = [
  {
    id: 'httpd',
    url: 'http://localhost/info_httpd.php',
    text: 'Httpd',
  },
  {
    id: 'php',
    url: 'http://localhost/info_php.php',
    text: 'PHP',
  },
  {
    id: 'mysql',
    url: 'http://localhost/info_mysql.php',
    text: 'MySQL',
  },
  {
    id: 'pgsql',
    url: 'http://localhost/info_pgsql.php',
    text: 'PgSQL',
  },
  {
    id: 'mongodb',
    url: 'http://localhost/info_mongo.php',
    text: 'MongoDB',
  },
  {
    id: 'redis',
    url: 'http://localhost/info_redis.php',
    text: 'Redis',
  },
  {
    id: 'memchached',
    url: 'http://localhost/info_memcd.php',
    text: 'Memcached',
  },
];

const TOOLS = [
  {
    id: 'adminer',
    url: 'http://localhost/vendor/adminer-4.7.5-en.php',
    text: 'Adminer',
  },
  {
    id: 'phpmyadmin',
    url: 'http://localhost/vendor/phpmyadmin-5.0.0/index.php',
    text: 'phpMyAdmin',
  },
  {
    id: 'phppgadmin',
    url: 'http://localhost/vendor/phppgadmin-7.12.0/',
    text: 'phpPgAdmin',
  },
  {
    id: 'phpredmin',
    url: 'http://localhost/vendor/phpredmin/public/index.php',
    text: 'PHPRedMin',
  },
  {
    id: 'phpmemcachedadmin',
    url: 'http://localhost/vendor/phpmemcachedadmin-1.3.0/index.php',
    text: 'PHPMemcachedAin',
  },
  {
    id: 'opcache_gui',
    url: 'http://localhost/opcache.php',
    text: 'Opcache GUI',
  },
  {
    id: 'opcache_control_panel',
    url: 'http://localhost/vendor/ocp.php',
    text: 'Opcache Control Panel',
  },
];

export function App() {
  const classes = useStyles();

  const [databaseMenu, setDatabaseMenu] = useState<null | HTMLElement>(null);
  const handleDatabaseIconClick = (event: MouseEvent<HTMLButtonElement>) => {
    setDatabaseMenu(event.currentTarget);
  };
  const handleDatabaseMenuClose = () => {
    setDatabaseMenu(null);
  };

  const [infoMenu, setInfoMenu] = useState<null | HTMLElement>(null);
  const handleInfoIconClick = (event: MouseEvent<HTMLButtonElement>) => {
    setInfoMenu(event.currentTarget);
  };
  const handleInfoMenuClose = () => {
    setInfoMenu(null);
  };

  const [toolsMenu, setToolsMenu] = useState<null | HTMLElement>(null);
  const handleToolsIconClick = (event: MouseEvent<HTMLButtonElement>) => {
    setToolsMenu(event.currentTarget);
  };
  const handleToolsMenuClose = () => {
    setToolsMenu(null);
  };

  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s &ndash; Devilbox" defaultTitle="Devilbox">
        <meta name="description" content="The web UI for Devilbox" />
      </Helmet>

      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <AppBar position="static" color="default">
          <Toolbar>
            <img
              src={`${process.env.PUBLIC_URL}/logo/round/logo_64_trans.png`}
              alt="logo"
              className={classes.logo}
            />

            <Typography variant="h6" color="primary" className={classes.title}>
              <Link href="/">devilbox</Link>
            </Typography>

            <Button>
              <span>Home</span>
            </Button>

            <Button>
              <span>Virtual Hosts</span>
            </Button>

            <Button>
              <span>E-Mails</span>
            </Button>

            <Button
              aria-haspopup="true"
              aria-label="databases"
              onClick={handleDatabaseIconClick}
              data-ga-event-category="AppBar"
              data-ga-event-action="databases"
            >
              <span className={classes.select}>Databases</span>
              <ExpandMoreIcon />
            </Button>

            <Menu
              id="databases-menu"
              anchorEl={databaseMenu}
              open={Boolean(databaseMenu)}
              onClose={handleDatabaseMenuClose}
            >
              {DATABASES.map(database => (
                <MenuItem
                  component="a"
                  data-no-link="true"
                  href={database.url}
                  key={database.id}
                  selected={false}
                  onClick={handleDatabaseMenuClose}
                >
                  {database.text}
                </MenuItem>
              ))}
            </Menu>

            <Button
              aria-haspopup="true"
              aria-label="infos"
              onClick={handleInfoIconClick}
              data-ga-event-category="AppBar"
              data-ga-event-action="infos"
            >
              <span className={classes.select}>Info</span>
              <ExpandMoreIcon />
            </Button>

            <Menu
              id="infos-menu"
              anchorEl={infoMenu}
              open={Boolean(infoMenu)}
              onClose={handleInfoMenuClose}
            >
              {INFOS.map(info => (
                <MenuItem
                  component="a"
                  data-no-link="true"
                  href={info.url}
                  key={info.id}
                  selected={false}
                  onClick={handleInfoMenuClose}
                >
                  {info.text}
                </MenuItem>
              ))}
            </Menu>

            <Button
              aria-haspopup="true"
              aria-label="tools"
              onClick={handleToolsIconClick}
              data-ga-event-category="AppBar"
              data-ga-event-action="tools"
            >
              <span className={classes.select}>Tools</span>
              <ExpandMoreIcon />
            </Button>

            <Menu
              id="tools-menu"
              anchorEl={toolsMenu}
              open={Boolean(toolsMenu)}
              onClose={handleToolsMenuClose}
            >
              {TOOLS.map(tool => (
                <MenuItem
                  component="a"
                  data-no-link="true"
                  href={tool.url}
                  key={tool.id}
                  selected={false}
                  onClick={handleToolsMenuClose}
                >
                  {tool.text}
                </MenuItem>
              ))}
            </Menu>

            <div className={classes.grow} />

            <IconButton aria-label="Github page of the project" color="inherit">
              <GithubIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

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
}
