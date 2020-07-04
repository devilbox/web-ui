import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Panel from '../Panel';
import Container from './Container';
import { makeGetContainerByStackId } from '../../pages/Home/selectors';

interface Props {
  id: string;
  text: string;
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

const Stack = ({ id, text, minAmountContainersPerStack }: Props) => {
  const classes = useStyles();

  const makeContainerSelector = makeGetContainerByStackId(id);
  const containers = useSelector(makeContainerSelector);

  return (
    <Panel name={text}>
      <Grid container spacing={2}>
        {Array.from(
          new Array(Math.max(containers.length, minAmountContainersPerStack!)),
        )
          .map((_, index) =>
            containers![index] ? (
              <Container
                key={containers[index].id}
                id={containers[index].id}
                name={containers[index].name}
                version={containers[index].version}
                status={containers[index].is_running ? 'running' : 'error'}
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
  containers: [],
  minAmountContainersPerStack: 3,
};

export default Stack;
