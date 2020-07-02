const isProduction = process.env.NODE_ENV === 'production';
const mockPath = `${process.env.PUBLIC_URL}/__mocks__/apiRequests`;

const getAppData = isProduction
  ? 'localhost/getAppData'
  : `${mockPath}/getAppData.json`;

const makeGetContainerData = (id: string) =>
  isProduction
    ? `localhost/getContainerData/${id}`
    : `${mockPath}/containerData/${id}.json`;

export { getAppData, makeGetContainerData };
