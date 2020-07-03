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
import { makePortsSelector } from '../../../../containers/App/selectors';
import styles from './styles';

const NetworkingTable = () => {
  const classes = styles();
  const ports = useSelector(makePortsSelector);

  return (
    <TableContainer className={classes.tableContainer}>
      <Table size="small">
        <TableHead>
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
        <TableBody>
          {ports.map(port => (
            <TableRow key={port.docker_name}>
              <TableCell>{port.docker_name}</TableCell>
              <TableCell>
                {port.host_port ? (
                  port.host_port.map((host, index) => (
                    <div key={`host_port_${index}`}>{host}</div>
                  ))
                ) : (
                  <span>&#8213;</span>
                )}
              </TableCell>
              <TableCell>
                {port.docker_port ? (
                  port.docker_port.map((docker, index) => (
                    <div key={`docker_port_${index}`}>{docker}</div>
                  ))
                ) : (
                  <span>&#8213;</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NetworkingTable;
