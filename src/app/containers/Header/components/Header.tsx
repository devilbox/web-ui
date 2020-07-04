import React, { useState, MouseEvent } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  GitHub as GithubIcon,
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { Site } from '../../../types';

import Menu from '../../../components/Menu';

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
      color: theme.palette.primary.contrastText,
      textDecoration: 'none',
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

interface Props {
  databases: Site[];
  infos: Site[];
  tools: Site[];
}

const Header = ({ databases, infos, tools }: Props) => {
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

  const renderMenuItems = () => [
    <Button key="home">
      <NavLink to="/" className={classes.linkItem}>
        Home
      </NavLink>
    </Button>,
    <Button key="vhosts">
      <NavLink to="/vhosts" className={classes.linkItem}>
        Virtual Hosts
      </NavLink>
    </Button>,
    <Button key="emails">
      <NavLink to="/mails" className={classes.linkItem}>
        E-Mails
      </NavLink>
    </Button>,
    <Button
      key="databases"
      aria-haspopup="true"
      aria-label="databases"
      onClick={handleDatabaseIconClick}
      data-ga-event-category="AppBar"
      data-ga-event-action="databases"
    >
      <span className={classes.select}>Databases</span>
      <ExpandMoreIcon />
    </Button>,
    <Button
      key="infos"
      aria-haspopup="true"
      aria-label="infos"
      onClick={handleInfoIconClick}
      data-ga-event-category="AppBar"
      data-ga-event-action="infos"
    >
      <span className={classes.select}>Info</span>
      <ExpandMoreIcon />
    </Button>,
    <Button
      key="tools"
      aria-haspopup="true"
      aria-label="tools"
      onClick={handleToolsIconClick}
      data-ga-event-category="AppBar"
      data-ga-event-action="tools"
    >
      <span className={classes.select}>Tools</span>
      <ExpandMoreIcon />
    </Button>,
  ];

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <img
          src={`${process.env.PUBLIC_URL}/logo/round/logo_64_trans.png`}
          alt="logo"
          className={classes.logo}
        />

        <Typography variant="h6" color="primary" className={classes.title}>
          <NavLink to="/" className={classes.linkItem}>
            devilbox
          </NavLink>
        </Typography>

        {renderMenuItems()}

        <Menu
          id="databases-menu"
          targetRef={databaseMenu}
          open={!!databaseMenu}
          handleClose={handleDatabaseMenuClose}
          items={databases}
        />

        <Menu
          id="infos-menu"
          targetRef={infoMenu}
          open={!!infoMenu}
          handleClose={handleInfoMenuClose}
          items={infos}
        />

        <Menu
          id="tools-menu"
          targetRef={toolsMenu}
          open={!!toolsMenu}
          handleClose={handleToolsMenuClose}
          items={tools}
        />

        <div className={classes.grow} />

        <IconButton aria-label="Github page of the project" color="inherit">
          <GithubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
