import React from 'react';
import {
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { makeLogMountsSelector } from '../../selectors';
import styles from './styles';
import { NO_VALUE } from './constants';

const LogMountsTable = () => {
  const classes = styles();
  const logMounts = useSelector(makeLogMountsSelector);

  return (
    <TableContainer className={classes.tableContainer}>
      <Table size="small">
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell component="th" scope="row">
              <Typography variant="button">Docker</Typography>
            </TableCell>
            <TableCell component="th" scope="row">
              <Typography variant="button">Host path</Typography>
            </TableCell>
            <TableCell component="th" scope="row">
              <Typography variant="button">Docker path</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logMounts.map(logMount => (
            <TableRow key={logMount.docker_name}>
              <TableCell>{logMount.docker_name || NO_VALUE}</TableCell>
              <TableCell>{logMount.host_path || NO_VALUE}</TableCell>
              <TableCell>{logMount.docker_path || NO_VALUE}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LogMountsTable;
