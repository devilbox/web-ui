/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

const Page = lazyLoad(
  () => import('./index'),
  module => module.default,
);

export default Page;
