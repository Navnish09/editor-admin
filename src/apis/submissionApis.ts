import { createAPIUrl } from "../configs/apiConfigs";
import apiUrls from "../configs/apiRoutes.json";

const submissionEndpoints = apiUrls.submissions;

export const getAllSubmissions = async () => {
  const getSubmissionsApi = createAPIUrl(submissionEndpoints.getSubmissions);
  const response = await fetch(getSubmissionsApi);
  return await response.json();
}