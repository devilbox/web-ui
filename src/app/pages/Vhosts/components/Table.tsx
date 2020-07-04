import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

const TableContent = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Project</TableCell>
            <TableCell>DocumentRoot</TableCell>
            <TableCell>Config</TableCell>
            <TableCell>Valid</TableCell>
            <TableCell>URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Row 1 - Cell 1</TableCell>
            <TableCell>Row 1 - Cell 2</TableCell>
            <TableCell>Row 1 - Cell 3</TableCell>
            <TableCell>Row 1 - Cell 4</TableCell>
            <TableCell>Row 1 - Cell 5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 2 - Cell 1</TableCell>
            <TableCell>Row 2 - Cell 2</TableCell>
            <TableCell>Row 2 - Cell 3</TableCell>
            <TableCell>Row 2 - Cell 4</TableCell>
            <TableCell>Row 2 - Cell 5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 3 - Cell 1</TableCell>
            <TableCell>Row 3 - Cell 2</TableCell>
            <TableCell>Row 3 - Cell 3</TableCell>
            <TableCell>Row 3 - Cell 4</TableCell>
            <TableCell>Row 3 - Cell 5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 4 - Cell 1</TableCell>
            <TableCell>Row 4 - Cell 2</TableCell>
            <TableCell>Row 4 - Cell 3</TableCell>
            <TableCell>Row 4 - Cell 4</TableCell>
            <TableCell>Row 4 - Cell 5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 5 - Cell 1</TableCell>
            <TableCell>Row 5 - Cell 2</TableCell>
            <TableCell>Row 5 - Cell 3</TableCell>
            <TableCell>Row 5 - Cell 4</TableCell>
            <TableCell>Row 5 - Cell 5</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableContent;
