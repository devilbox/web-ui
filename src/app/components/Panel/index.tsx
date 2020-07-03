import React, { ReactNode } from 'react';
import { Card, CardHeader, CardContent, Box } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface Props {
  name?: string;
  children: ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 auto',

      '& + $root': {
        marginTop: theme.spacing(2),
      },
    },
    header: {
      borderBottom: '1px solid #000',
    },
    title: {
      fontSize: '1.25rem',
    },
  }),
);

const Panel = ({ name, children }: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {name && (
        <CardHeader
          title={name}
          className={classes.header}
          titleTypographyProps={{ className: classes.title }}
        />
      )}

      <CardContent>
        <Box color="text.secondary">{children}</Box>
      </CardContent>
    </Card>
  );
};

export default Panel;
