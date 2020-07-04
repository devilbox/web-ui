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
import { CheckCircle as CheckCircleIcon } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { makeServicesSelector } from '../../selectors';
import styles from './styles';

const ServicesTable = () => {
  const classes = styles();
  const servicesByDockerContainer = useSelector(makeServicesSelector);

  const rows: ReactNode[] = [];

  const renderhostNameEntry = (hostname: string) => (
    <TableCell>
      <CheckCircleIcon fontSize="small" className={classes.rowIcon} />
      <span className={classes.rowValue}>{hostname}</span>
    </TableCell>
  );

  servicesByDockerContainer.forEach(services => {
    services.forEach(service => {
      service.hostnames.forEach((hostname, index) => {
        if (index === 0) {
          rows.push(
            <TableRow key={`${service.id}_${hostname}`}>
              <TableCell rowSpan={service.hostnames.length}>
                {service.name}
              </TableCell>

              {renderhostNameEntry(hostname)}
            </TableRow>,
          );
        } else {
          rows.push(
            <TableRow key={`${service.id}_${hostname}`}>
              {renderhostNameEntry(hostname)}
            </TableRow>,
          );
        }
      });
    });
  });

  return (
    <TableContainer className={classes.tableContainer}>
      <Table size="small">
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell component="th" scope="row">
              <Typography variant="button">Service</Typography>
            </TableCell>
            <TableCell component="th" scope="row">
              <Typography variant="button">Hostname / IP</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default ServicesTable;
