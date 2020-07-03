import { createSelector } from '@reduxjs/toolkit';
import RootState from '../../../types/RootState';
import { Container } from '../App/types';

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

export const makeContainerIdsSelector = createSelector(app, appState =>
  appState.containers.map(container => container.id),
);

export const makeToolsIdsSelector = createSelector(app, appState =>
  appState.tools.map(tool => tool.id),
);

export const makeStacksSelector = createSelector(
  app,
  appState => appState.stacks,
);

export const makeGetContainerByStackId = (stackId: string) =>
  createSelector(app, appState =>
    (appState.containers as Container[]).filter(
      container => container.stack && container.stack === stackId,
    ),
  );

export const makeCoreVersionSelector = createSelector(
  app,
  appState => appState.versions.core || 'n.a.',
);

export const makeUIVersionSelector = createSelector(
  app,
  appState => appState.versions.ui || 'n.a.',
);

export const makeHealthPercentageSelector = createSelector(
  app,
  appState =>
    (appState.containers as Container[]).filter(
      container => container.is_running,
    ).length / appState.containers.length || 0,
);

export const makeSettingsSelector = createSelector(
  app,
  appState => appState.settings,
);

export const makeToolsSelector = createSelector(
  app,
  appState => appState.tools,
);

export const makeNetworkingSelector = createSelector(
  app,
  appState => appState.networking,
);
