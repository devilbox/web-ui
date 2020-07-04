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
import { makeConfigMountsSelector } from '../../selectors';
import styles from './styles';
import { NO_VALUE } from './constants';

const ConfigMountsTable = () => {
  const classes = styles();
  const configMounts = useSelector(makeConfigMountsSelector);

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
          {configMounts.map(configMount => (
            <TableRow key={configMount.docker_name}>
              <TableCell>{configMount.docker_name || NO_VALUE}</TableCell>
              <TableCell>{configMount.host_path || NO_VALUE}</TableCell>
              <TableCell>{configMount.docker_path || NO_VALUE}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ConfigMountsTable;
