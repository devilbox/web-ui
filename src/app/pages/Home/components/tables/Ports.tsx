import React, { ReactNode } from 'react';
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
import { makePortsSelector } from '../../../../containers/App/selectors';
import styles from './styles';
import { NO_VALUE } from './constants';

const NetworkingTable = () => {
  const classes = styles();
  const ports = useSelector(makePortsSelector);

  const rows: ReactNode[] = [];

  ports.forEach(port => {
    (port.host_port || []).forEach((host, index) => {
      if (index === 0) {
        rows.push(
          <TableRow key={`${port.id}_${host}`}>
            <TableCell rowSpan={port.host_port.length}>
              {port.docker_name}
            </TableCell>

            <TableCell>{host || NO_VALUE}</TableCell>
            <TableCell>
              {(ports[index] || {}).docker_port || NO_VALUE}
            </TableCell>
          </TableRow>,
        );
      } else {
        rows.push(
          <TableRow key={`${port.id}_${host}`}>
            <TableCell>{host || NO_VALUE}</TableCell>
            <TableCell>
              {(ports[index] || {}).docker_port || NO_VALUE}
            </TableCell>
          </TableRow>,
        );
      }
    });
  });

  return (
    <TableContainer className={classes.tableContainer}>
      <Table size="small">
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell component="th" scope="row">
              <Typography variant="button">Docker</Typography>
            </TableCell>
            <TableCell component="th" scope="row">
              <Typography variant="button">Host port</Typography>
            </TableCell>
            <TableCell component="th" scope="row">
              <Typography variant="button">Docker port</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default NetworkingTable;
