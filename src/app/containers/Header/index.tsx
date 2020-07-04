import React from 'react';
import { useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/redux-injectors';
import { sliceKey, reducer } from '../../pages/Home/slice';
import {
  makeSitesDatabasesSelector,
  makeSitesInfosSelector,
  makeSitesToolsSelector,
} from '../../pages/Home/selectors';
import Header from './components/Header';

const HeaderContainer = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  const databases = useSelector(makeSitesDatabasesSelector);
  const infos = useSelector(makeSitesInfosSelector);
  const tools = useSelector(makeSitesToolsSelector);

  return <Header databases={databases} infos={infos} tools={tools} />;
};

export default HeaderContainer;
