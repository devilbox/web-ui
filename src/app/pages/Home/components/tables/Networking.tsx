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
import { makeNetworkingSelector } from '../../selectors';
import styles from './styles';
import { NO_VALUE } from './constants';

const NetworkingTable = () => {
  const classes = styles();
  const networking = useSelector(makeNetworkingSelector);

  return (
    <TableContainer className={classes.tableContainer}>
      <Table size="small">
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell component="th" scope="row">
              <Typography variant="button">Docker</Typography>
            </TableCell>
            <TableCell component="th" scope="row">
              <Typography variant="button">Hostname</Typography>
            </TableCell>
            <TableCell component="th" scope="row">
              <Typography variant="button">IP</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {networking.map(network => (
            <TableRow key={network.docker_name}>
              <TableCell>{network.docker_name || NO_VALUE}</TableCell>
              <TableCell>{network.hostname || NO_VALUE}</TableCell>
              <TableCell>{network.ip || NO_VALUE}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NetworkingTable;
