import { createSelector } from '@reduxjs/toolkit';
import RootState from '../../../types/RootState';
import { ContainerItem } from '../App/types';

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

const makeContainerIdsSelector = createSelector(app, appState =>
  appState.containers.map(container => container.id),
);

const makeStacksSelector = createSelector(app, appState => appState.stacks);

const makeGetContainerByStackId = (stackId: string) =>
  createSelector(app, appState =>
    (appState.containers as ContainerItem[]).filter(
      container => container.stack && container.stack === stackId,
    ),
  );

const makeCoreVersionSelector = createSelector(
  app,
  appState => appState.versions.core || 'n.a.',
);

const makeUIVersionSelector = createSelector(
  app,
  appState => appState.versions.ui || 'n.a.',
);

const makeHealthPercentageSelector = createSelector(
  app,
  appState =>
    (appState.containers as ContainerItem[]).filter(
      container => container.is_running,
    ).length / appState.containers.length || 0,
);

export {
  makeDatabasesItemsSelector,
  makeInfosItemsSelector,
  makeToolsIemsSelector,
  makeContainerIdsSelector,
  makeStacksSelector,
  makeGetContainerByStackId,
  makeCoreVersionSelector,
  makeUIVersionSelector,
  makeHealthPercentageSelector,
};
