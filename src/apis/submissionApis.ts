import Mustache from "mustache";

import { createAPIUrl } from "../configs/apiConfigs";
import apiUrls from "../configs/apiRoutes.json";

const submissionEndpoints = apiUrls.submissions;

export const getAllSubmissions = async () => {
  const getSubmissionsApi = createAPIUrl(submissionEndpoints.getSubmissions);
  const response = await fetch(getSubmissionsApi);
  return await response.json();
}


export const deleteSubmission = async (id: string) => {
  const deleteSubmissionApi = createAPIUrl(Mustache.render(submissionEndpoints.deleteSubmission, { id }));
  const response = await fetch(deleteSubmissionApi, {
    method: "DELETE",
  });
  return await response.json();
}