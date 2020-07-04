import React, { Fragment } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface Item {
  title: string;
  value: string;
}

interface Props {
  items: Item[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
    },
    title: {
      '& ~ $title': {
        marginTop: theme.spacing(1),
      },
    },
    value: {
      margin: 0,
      fontWeight: 700,
    },
  }),
);

const Dictionary = ({ items }: Props) => {
  const classes = useStyles();

  return (
    <dl className={classes.root}>
      {items.map((item, index) => (
        <Fragment key={`dictionary_${item.title}_${index}`}>
          <dt className={classes.title}>{item.title}</dt>
          <dd className={classes.value}>
            {item.value || <span>&#8213;</span>}
          </dd>
        </Fragment>
      ))}
    </dl>
  );
};

export default Dictionary;
