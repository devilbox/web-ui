import React from 'react';
import { useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/redux-injectors';
import { sliceKey, reducer } from '../App/slice';
import {
  makeDatabasesItemsSelector,
  makeInfosItemsSelector,
  makeToolsIemsSelector,
} from '../App/selectors';
import Header from './components/Header';

const HeaderContainer = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  const databases = useSelector(makeDatabasesItemsSelector);
  const infos = useSelector(makeInfosItemsSelector);
  const tools = useSelector(makeToolsIemsSelector);

  return <Header databases={databases} infos={infos} tools={tools} />;
};

export default HeaderContainer;
