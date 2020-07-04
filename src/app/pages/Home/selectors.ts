import { createSelector } from '@reduxjs/toolkit';
import RootState from '../../../types/RootState';
import { Container } from './types';

export const docker = (state: RootState) => state.docker;

export const makeDataIsFetchedSelector = createSelector(
  docker,
  dockerState => dockerState.__meta.fetch === 'done',
);

export const makeContainerIdsSelector = createSelector(docker, dockerState =>
  dockerState.containers.map(container => container.id),
);

export const makeToolsIdsSelector = createSelector(docker, dockerState =>
  dockerState.tools.map(tool => tool.id),
);

export const makeStacksSelector = createSelector(
  docker,
  dockerState => dockerState.stacks,
);

export const makeGetContainerByStackId = (stackId: string) =>
  createSelector(docker, dockerState =>
    (dockerState.containers as Container[]).filter(
      container => container.stack && container.stack === stackId,
    ),
  );

export const makeHealthPercentageSelector = createSelector(
  docker,
  dockerState =>
    (dockerState.containers as Container[]).filter(
      container => container.is_running,
    ).length / dockerState.containers.length || 0,
);

export const makeSettingsSelector = createSelector(
  docker,
  dockerState => dockerState.settings,
);

export const makeToolsSelector = createSelector(
  docker,
  dockerState => dockerState.tools,
);

export const makeNetworkingSelector = createSelector(
  docker,
  dockerState => dockerState.networking,
);

export const makePortsSelector = createSelector(
  docker,
  dockerState => dockerState.ports,
);

export const makeDataMountsSelector = createSelector(
  docker,
  dockerState => dockerState.mounts.data,
);

export const makeConfigMountsSelector = createSelector(
  docker,
  dockerState => dockerState.mounts.config,
);

export const makeLogMountsSelector = createSelector(
  docker,
  dockerState => dockerState.mounts.log,
);

export const makeServicesSelector = createSelector(docker, dockerState =>
  (dockerState.containers as Container[]).map(
    container => container.services || [],
  ),
);
