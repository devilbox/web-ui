import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    tableContainer: {
      margin: theme.spacing(0, -2, 0),
      width: `calc(100% + ${theme.spacing(2)}px + ${theme.spacing(2)}px)`,

      '& + $tableContainer': {
        marginTop: theme.spacing(2),
      },
    },
    header: {
      whiteSpace: 'nowrap',
    },
  }),
);
