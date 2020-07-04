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
import { makeToolsSelector } from '../../selectors';
import styles from './styles';
import { NO_VALUE } from './constants';

const ToolsTable = () => {
  const classes = styles();
  const tools = useSelector(makeToolsSelector);

  return (
    <TableContainer className={classes.tableContainer}>
      <Table size="small">
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell component="th" scope="row" colSpan={2}>
              <Typography variant="button">Tools</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tools.map(tool => (
            <TableRow key={tool.id}>
              <TableCell>{tool.name || NO_VALUE}</TableCell>
              <TableCell>{tool.version || NO_VALUE}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ToolsTable;
