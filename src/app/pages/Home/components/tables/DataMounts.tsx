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
import { makeDataMountsSelector } from '../../../../containers/App/selectors';
import styles from './styles';
import { NO_VALUE } from './constants';

const DataMountsTable = () => {
  const classes = styles();
  const dataMounts = useSelector(makeDataMountsSelector);

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
          {dataMounts.map(dataMount => (
            <TableRow key={dataMount.docker_name}>
              <TableCell>{dataMount.docker_name || NO_VALUE}</TableCell>
              <TableCell>{dataMount.host_path || NO_VALUE}</TableCell>
              <TableCell>{dataMount.docker_path || NO_VALUE}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataMountsTable;
