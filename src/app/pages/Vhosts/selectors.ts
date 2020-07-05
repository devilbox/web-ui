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

export const makeMetaFetchSelector = createSelector(
  vhosts,
  vhostsState => vhostsState.__meta.fetch,
);

export const makeGlobalConfigPathSelector = createSelector(
  vhosts,
  vhostsState => vhostsState.global_config_path,
);

export const makeTldSuffixSelector = createSelector(
  vhosts,
  vhostsState => vhostsState.tld_suffix,
);

export const makeErrorTemplatesSelector = createSelector(
  vhosts,
  vhostsState => vhostsState.error_templates,
);

const makeDomainErrorTemplateSelector = createSelector(
  makeErrorTemplatesSelector,
  templates => templates.missing_dns_record,
);

export const makeDomainErrorSelector = (vhostId: string) =>
  createSelector(
    [
      makeDomainErrorTemplateSelector,
      makeVhostsSelector,
      makeGlobalConfigPathSelector,
      makeTldSuffixSelector,
    ],
    (template, vhosts, globalConfigPath, tldSuffix) => {
      const vhost = vhosts.find(vhost => vhost.id === vhostId);

      if (vhost) {
        return template
          .replace(/\{\{global_config_path\}\}/, globalConfigPath)
          .replace(/\{\{domain\}\}/, vhost.domain)
          .replace(/\{\{project\}\}/, vhost.project)
          .replace(/\{\{tld_suffix\}\}/, tldSuffix);
      }

      return undefined;
    },
  );

const makeDirectoryErrorTemplateSelector = createSelector(
  makeErrorTemplatesSelector,
  templates => templates.missing_vhost_dir,
);

export const makeDirectoryErrorSelector = (vhostId: string) =>
  createSelector(
    [makeDirectoryErrorTemplateSelector, makeVhostsSelector],
    (template, vhosts) => {
      const vhost = vhosts.find(vhost => vhost.id === vhostId);

      if (vhost) {
        return template.replace(/\{\{path\}\}/, vhost.path);
      }

      return undefined;
    },
  );
