import React from 'react';
import { Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container as TypeContainer } from './types';
import Panel from '../Panel';
import Container from './Container';

interface Props {
  name: string;
  containers: TypeContainer[];
  minAmountContainersPerStack?: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridItem: {
      display: 'flex',
      justifyContent: 'center',
    },
    header: {
      borderBottom: '1px solid #000',
    },
    title: {
      color: theme.palette.text.secondary,
      fontSize: '1.25rem',
    },
  }),
);

const Stack = ({ name, containers, minAmountContainersPerStack }: Props) => {
  const classes = useStyles();

  return (
    <Panel name={name}>
      <Grid container spacing={2}>
        {Array.from(
          new Array(Math.max(containers.length, minAmountContainersPerStack!)),
        )
          .map((_, index) =>
            containers[index] ? (
              <Container
                key={containers[index].id}
                id={containers[index].id}
                name={containers[index].name}
                version={containers[index].version}
                status={containers[index].status}
              />
            ) : undefined,
          )
          .map((node, index) => (
            <Grid
              item
              xs
              key={`gridItem_${index}`}
              className={classes.gridItem}
            >
              {node}
            </Grid>
          ))}
      </Grid>
    </Panel>
  );
};

Stack.defaultProps = {
  minAmountContainersPerStack: 3,
};

export default Stack;
