import React, { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import saga from './saga';
import { sliceKey, reducer, actions } from './slice';

interface Props {
  children: ReactNode;
}

const App = ({ children }: Props) => {
  const dispatch = useDispatch();

  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga });

  useEffect(() => {
    dispatch(actions.fetchData());
  }, [dispatch]);

  return <>{children}</>;
};

export default App;
