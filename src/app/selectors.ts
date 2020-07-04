import { createSelector } from '@reduxjs/toolkit';
import RootState from '../types/RootState';

export const app = (state: RootState) => state.app;

export const makeSitesDatabasesSelector = createSelector(
  app,
  appState => appState.sites.databases,
);

export const makeSitesInfosSelector = createSelector(
  app,
  appState => appState.sites.infos,
);

export const makeSitesToolsSelector = createSelector(
  app,
  appState => appState.sites.tools,
);

export const makeCoreVersionSelector = createSelector(
  app,
  appState => appState.versions.core,
);

export const makeUIVersionSelector = createSelector(
  app,
  appState => appState.versions.ui,
);
