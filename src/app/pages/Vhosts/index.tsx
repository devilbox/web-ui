import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography } from '@material-ui/core';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import DefaultContent from './components/Default';
import Table from './components/Table';
import saga from './saga';
import { makeHasVhostsSelector, makeDataIsFetchedSelector } from './selectors';
import { sliceKey, reducer, actions } from './slice';

const Vhosts = () => {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga });

  const dispatch = useDispatch();

  const dataIsFetched = useSelector(makeDataIsFetchedSelector);
  const hasVhosts = useSelector(makeHasVhostsSelector);

  useEffect(() => {
    if (!dataIsFetched) {
      dispatch(actions.fetchData());
    }
  }, [dataIsFetched, dispatch]);

  return (
    <>
      <Helmet>
        <title>Vhosts</title>
        <meta name="description" content="Devilbox Web-UI" />
      </Helmet>
      <Container>
        <Typography variant="h1" component="h2" gutterBottom>
          Virtual hosts
        </Typography>

        {hasVhosts ? <Table /> : <DefaultContent />}
      </Container>
    </>
  );
};

export default Vhosts;
