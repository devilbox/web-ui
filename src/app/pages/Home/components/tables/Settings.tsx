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
import { makeSettingsSelector } from '../../../../containers/App/selectors';
import styles from './styles';

const SettingsTable = () => {
  const classes = styles();
  const settings = useSelector(makeSettingsSelector);

  return (
    <TableContainer className={classes.tableContainer}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row" colSpan={2}>
              <Typography variant="button">Settings</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {settings.map(setting => (
            <TableRow key={setting.setting}>
              <TableCell>{setting.setting}</TableCell>
              <TableCell>{setting.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SettingsTable;
