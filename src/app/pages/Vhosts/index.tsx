import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Tab } from '@material-ui/core';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import DefaultContent from './components/Default';
import Table from './components/Table';
import saga from './saga';
import {
  makeHasVhostsSelector,
  makeDataIsFetchedSelector,
  makeMetaFetchSelector,
} from './selectors';
import { sliceKey, reducer, actions } from './slice';

const Vhosts = () => {
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga });

  const dispatch = useDispatch();

  const dataIsFetched = useSelector(makeDataIsFetchedSelector);
  const hasVhosts = useSelector(makeHasVhostsSelector);
  const fetchStatus = useSelector(makeMetaFetchSelector);

  useEffect(() => {
    if (!dataIsFetched) {
      dispatch(actions.fetchData());
    }
  }, [dataIsFetched, dispatch]);

  const renderContent = () => {
    if (fetchStatus !== 'done') {
      return undefined;
    }

    if (hasVhosts) {
      return <Table />;
    }

    return <DefaultContent />;
  };

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

        {renderContent()}
      </Container>
    </>
  );
};

export default Vhosts;
