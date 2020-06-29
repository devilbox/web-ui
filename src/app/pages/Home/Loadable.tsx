import { lazyLoad } from 'utils/loadable';

export const HomePage = lazyLoad(
  () => import('.'),
  module => module.default,
);
