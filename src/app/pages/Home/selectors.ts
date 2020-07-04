import { createSelector } from '@reduxjs/toolkit';
import RootState from '../../../types/RootState';
import { Container } from './types';

export const home = (state: RootState) => state.home;

export const makeSitesDatabasesSelector = createSelector(
  home,
  homeState => homeState.sites.databases,
);

export const makeSitesInfosSelector = createSelector(
  home,
  homeState => homeState.sites.infos,
);

export const makeSitesToolsSelector = createSelector(
  home,
  homeState => homeState.sites.tools,
);

export const makeContainerIdsSelector = createSelector(home, homeState =>
  homeState.containers.map(container => container.id),
);

export const makeToolsIdsSelector = createSelector(home, homeState =>
  homeState.tools.map(tool => tool.id),
);

export const makeStacksSelector = createSelector(
  home,
  homeState => homeState.stacks,
);

export const makeGetContainerByStackId = (stackId: string) =>
  createSelector(home, homeState =>
    (homeState.containers as Container[]).filter(
      container => container.stack && container.stack === stackId,
    ),
  );

export const makeCoreVersionSelector = createSelector(
  home,
  homeState => homeState.versions.core || 'n.a.',
);

export const makeUIVersionSelector = createSelector(
  home,
  homeState => homeState.versions.ui || 'n.a.',
);

export const makeHealthPercentageSelector = createSelector(
  home,
  homeState =>
    (homeState.containers as Container[]).filter(
      container => container.is_running,
    ).length / homeState.containers.length || 0,
);

export const makeSettingsSelector = createSelector(
  home,
  homeState => homeState.settings,
);

export const makeToolsSelector = createSelector(
  home,
  homeState => homeState.tools,
);

export const makeNetworkingSelector = createSelector(
  home,
  homeState => homeState.networking,
);

export const makePortsSelector = createSelector(
  home,
  homeState => homeState.ports,
);

export const makeDataMountsSelector = createSelector(
  home,
  homeState => homeState.mounts.data,
);

export const makeConfigMountsSelector = createSelector(
  home,
  homeState => homeState.mounts.config,
);

export const makeLogMountsSelector = createSelector(
  home,
  homeState => homeState.mounts.log,
);

export const makeServicesSelector = createSelector(home, homeState =>
  (homeState.containers as Container[]).map(
    container => container.services || [],
  ),
);
