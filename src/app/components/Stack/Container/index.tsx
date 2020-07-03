import React from 'react';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Container as TypesContainer } from '../types';

interface Props extends TypesContainer {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: '50%',
      backgroundColor: theme.palette.success.dark,
      width: 100,
      height: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      boxShadow: '0 0 3px 0 rgba(0, 0, 0, 0.5)',

      '& + $root': {
        marginLeft: theme.spacing(2),
      },
    },
    headline: {
      color: theme.palette.success.contrastText,
      fontWeight: 700,
    },
    version: {
      color: theme.palette.success.contrastText,
    },
    isRunning: {
      backgroundColor: theme.palette.success.dark,
      color: theme.palette.success.contrastText,
    },
    isWarning: {
      backgroundColor: theme.palette.warning.dark,
      color: theme.palette.warning.contrastText,
    },
    isError: {
      backgroundColor: theme.palette.error.dark,
      color: theme.palette.error.contrastText,
    },
  }),
);

const Container = ({ name, version, status, error }: Props) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, {
        [classes.isRunning]: status === 'running',
        [classes.isWarning]: status === 'warning',
        [classes.isError]: status === 'error' && error,
      })}
    >
      <Typography variant="body1" className={classes.headline}>
        {name}
      </Typography>
      <Typography variant="subtitle2" className={classes.version}>
        {version}
      </Typography>
    </div>
  );
};

export default Container;
