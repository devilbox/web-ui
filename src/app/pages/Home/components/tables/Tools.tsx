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
import { makeToolsSelector } from '../../../../containers/App/selectors';
import styles from './styles';

const ToolsTable = () => {
  const classes = styles();
  const tools = useSelector(makeToolsSelector);

  return (
    <TableContainer className={classes.tableContainer}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row" colSpan={2}>
              <Typography variant="button">Tools</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tools.map(tool => (
            <TableRow key={tool.id}>
              <TableCell>{tool.name}</TableCell>
              <TableCell>{tool.version || <span>&#8213;</span>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ToolsTable;
