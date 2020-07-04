const isProduction = process.env.NODE_ENV === 'production';
const mockPath = `${process.env.PUBLIC_URL}/__mocks__/apiRequests`;

export const getAppData = isProduction
  ? 'localhost/getAppData'
  : `${mockPath}/getAppData.json`;

export const getDockerData = isProduction
  ? 'localhost/getDockerData'
  : `${mockPath}/getDockerData.json`;

export const makeGetContainerData = (id: string) =>
  isProduction
    ? `localhost/getContainerData/${id}`
    : `${mockPath}/containerData/${id}.json`;

export const makeGetToolsData = (id: string) =>
  isProduction
    ? `localhost/getToolsData/${id}`
    : `${mockPath}/tools/${id}.json`;

export const getVhosts = isProduction
  ? 'localhost/getVhosts'
  : `${mockPath}/getVhosts.json`;

export const makeGetVhostDirectory = (id: string) =>
  isProduction
    ? `localhost/vhosts/directory/${id}`
    : `${mockPath}/vhosts/directory/${id}.json`;

export const makeGetVhostsDomain = (id: string) =>
  isProduction
    ? `localhost/vhosts/domain/${id}`
    : `${mockPath}/vhosts/domain/${id}.json`;
