
// Function to build the API URL
export const createAPIUrl = (endpoint: string) => {
  return `${process.env.REACT_APP_API_DOMAIN}${endpoint}`;
}