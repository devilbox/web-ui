import React from 'react';
import { useSelector } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Settings as SettingsIcon,
  Error as ErrorIcon,
  Check as SuccessIcon,
} from '@material-ui/icons';
import clsx from 'clsx';
import {
  makeHasVhostsSortedByProjectSelector,
  makeTldSuffixSelector,
} from '../selectors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hasSuccess: {
      color: theme.palette.success.contrastText,
      backgroundColor: theme.palette.success.dark,
    },
    hasError: {
      color: theme.palette.error.contrastText,
      backgroundColor: theme.palette.error.dark,
    },
    isCentered: {
      textAlign: 'center',
    },
    isSmallCell: {
      width: 75,
    },
    url: {
      color: theme.palette.text.secondary,

      '&hover': {
        textDecoration: 'underline',
      },
    },
  }),
);

const TableContent = () => {
  const classes = useStyles();

  const vhosts = useSelector(makeHasVhostsSortedByProjectSelector);
  const tldSuffix = useSelector(makeTldSuffixSelector);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Project</TableCell>
            <TableCell>DocumentRoot</TableCell>
            <TableCell className={classes.isSmallCell}>Config</TableCell>
            <TableCell className={classes.isSmallCell}>Valid</TableCell>
            <TableCell>URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vhosts.map(vhost => (
            <Tooltip key={vhost.id} title={vhost.initial_error || ''} arrow>
              <TableRow>
                <TableCell>{vhost.project}</TableCell>
                <TableCell>{vhost.path}</TableCell>
                <TableCell className={classes.isCentered}>
                  {vhost.config_path ? (
                    <Tooltip title={`Virtual host: ${vhost.project}.conf`}>
                      <IconButton href={vhost.config_path} target="_blank">
                        <SettingsIcon />
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <span>&#8213;</span>
                  )}
                </TableCell>
                <TableCell
                  className={clsx(classes.isCentered, {
                    [classes.hasError]: vhost.initial_error,
                    [classes.hasSuccess]: !vhost.initial_error,
                  })}
                >
                  {vhost.initial_error ? <ErrorIcon /> : <SuccessIcon />}
                </TableCell>
                <TableCell>
                  {vhost.initial_error ? (
                    <span>&#8213;</span>
                  ) : (
                    <Link
                      href={`http://${vhost.project}.${tldSuffix}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.url}
                    >
                      {vhost.project}.{tldSuffix}
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            </Tooltip>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableContent;
