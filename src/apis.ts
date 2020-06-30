const isProduction = process.env.NODE_ENV === 'production';
const mockPath = `${process.env.PUBLIC_URL}/__mocks__/apiRequests`;

const getAppData = isProduction
  ? 'localhost/getAppData'
  : `${mockPath}/getAppData.json`;

export { getAppData };
