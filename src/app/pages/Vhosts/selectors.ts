import { createSelector } from '@reduxjs/toolkit';
import RootState from '../../../types/RootState';

export const vhosts = (state: RootState) => state.vhosts;

export const makeDataIsFetchedSelector = createSelector(
  vhosts,
  vhostsState => vhostsState.__meta.fetch === 'done',
);

export const makeVhostsSelector = createSelector(
  vhosts,
  vhostsState => vhostsState.vhosts,
);

export const makeHasVhostsSelector = createSelector(
  vhosts,
  vhostsState => vhostsState.vhosts.length > 0,
);

export const makeHasVhostsSortedByProjectSelector = createSelector(
  makeVhostsSelector,
  vhosts =>
    [...vhosts].sort((vhostA, vhostB) => {
      if (vhostA.project < vhostB.project) {
        return -1;
      }

      if (vhostA.project > vhostB.project) {
        return 1;
      }

      return 0;
    }),
);

export const makeTldSuffixSelector = createSelector(
  vhosts,
  vhostsState => vhostsState.tld_suffix,
);
