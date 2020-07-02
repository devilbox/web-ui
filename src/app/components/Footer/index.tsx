import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {
  BugReport as BugReportIcon,
  SupervisedUserCircle as SupervisedUserCircleIcon,
} from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
    },
    customBottomNavigationAction: {
      minWidth: 80,
      display: 'flex',
      alignItems: 'center',
    },
  }),
);

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation showLabels className={classes.root}>
      <div className={classes.customBottomNavigationAction}>
        {window && (window as any).pageLoadStart
          ? `Render time: ${new Intl.NumberFormat('en-US', {
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
  );
};

export default Footer;
