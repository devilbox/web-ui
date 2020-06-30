import { createSelector } from '@reduxjs/toolkit';
import RootState from '../../../types/RootState';

export const app = (state: RootState) => state.app;

const makeDatabasesItemsSelector = createSelector(
  app,
  appState => appState.settings.databases,
);

const makeInfosItemsSelector = createSelector(
  app,
  appState => appState.settings.infos,
);

const makeToolsIemsSelector = createSelector(
  app,
  appState => appState.settings.tools,
);

export {
  makeDatabasesItemsSelector,
  makeInfosItemsSelector,
  makeToolsIemsSelector,
};
