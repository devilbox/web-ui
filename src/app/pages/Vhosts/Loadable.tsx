import { lazyLoad } from 'utils/loadable';

const Page = lazyLoad(
  () => import('.'),
  module => module.default,
);

export default Page;
