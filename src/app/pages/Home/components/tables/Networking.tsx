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
import { makeNetworkingSelector } from '../../../../containers/App/selectors';
import styles from './styles';

const NetworkingTable = () => {
  const classes = styles();
  const networking = useSelector(makeNetworkingSelector);

  return (
    <TableContainer className={classes.tableContainer}>
      <Table size="small">
        <TableHead>
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
              <TableCell>{network.docker_name}</TableCell>
              <TableCell>{network.hostname}</TableCell>
              <TableCell>{network.ip}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NetworkingTable;
