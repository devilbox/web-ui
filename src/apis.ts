const isProduction = process.env.NODE_ENV === 'production';
const mockPath = `${process.env.PUBLIC_URL}/__mocks__/apiRequests`;

export const domain = window.location.hostname;

export const getAppData = isProduction
  ? `//${domain}/get-app-data.php`
  : `${mockPath}/getAppData.json`;

export const getDockerData = isProduction
  ? `//${domain}/get-docker-data.php`
  : `${mockPath}/getDockerData.json`;

export const getMails = isProduction
  ? `//${domain}/get-mails.php`
  : `${mockPath}/getMails.json`;

export const makeGetContainerData = (id: string) =>
  isProduction
    ? `//${domain}/get-container-data.php?id=${id}`
    : `${mockPath}/containerData/${id}.json`;

export const makeGetToolsData = (id: string) =>
  isProduction
    ? `//${domain}/get-tools.php?id=${id}`
    : `${mockPath}/tools/${id}.json`;

export const getVhosts = isProduction
  ? `//${domain}/get-vhosts.php`
  : `${mockPath}/getVhosts.json`;

export const makeGetVhostDirectory = (id: string) =>
  isProduction
    ? `//${domain}/get-vhost-dir.php?id=${id}`
    : `${mockPath}/vhosts/directory/${id}.json`;

export const makeGetVhostsDomain = (id: string, tld_suffix: string) =>
  isProduction
    ? `//${id}.${tld_suffix}/devilbox-api/status.json`
    : `${mockPath}/vhosts/domain/${id}.json`;
