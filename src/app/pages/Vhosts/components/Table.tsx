import React from 'react';
import { useSelector } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import {
  makeHasVhostsSortedByProjectSelector,
  makeTldSuffixSelector,
} from '../selectors';

const TableContent = () => {
  const vhosts = useSelector(makeHasVhostsSortedByProjectSelector);
  const tldSuffix = useSelector(makeTldSuffixSelector);

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
          {vhosts.map(vhost => (
            <TableRow key={vhost.id}>
              <TableCell>{vhost.project}</TableCell>
              <TableCell>{vhost.path}</TableCell>
              <TableCell>{vhost.config_path ? 'YES' : 'NO'}</TableCell>
              <TableCell>{vhost.initial_error ? 'YES' : 'NO'}</TableCell>
              <TableCell>
                <a
                  href={`${vhost.project}.${tldSuffix}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {vhost.project}.{tldSuffix}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableContent;
