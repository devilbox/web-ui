const isProduction = process.env.NODE_ENV === 'production';
const mockPath = `${process.env.PUBLIC_URL}/__mocks__/apiRequests`;

const getHomeData = isProduction
  ? 'localhost/getHomeData'
  : `${mockPath}/getHomeData.json`;

const makeGetContainerData = (id: string) =>
  isProduction
    ? `localhost/getContainerData/${id}`
    : `${mockPath}/containerData/${id}.json`;

const makeGetToolsData = (id: string) =>
  isProduction
    ? `localhost/getToolsData/${id}`
    : `${mockPath}/tools/${id}.json`;

export { getHomeData, makeGetContainerData, makeGetToolsData };
