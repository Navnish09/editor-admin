import { Question } from "views/Questions/models";
import { createAPIUrl } from "../configs/apiConfigs";
import apiUrls from "../configs/apiRoutes.json";

const questionEndpoints = apiUrls.questions;

/**
 * Get all questions
 * @returns - Promise of Question[]
 **/
export const getQuestions = async () => {
  const getQuestionApi = createAPIUrl(questionEndpoints.getQuestions);
  const response = await fetch(getQuestionApi);
  return await response.json();
}


/**
 * Create a new question
 * @param params - Question object
 * @returns - Promise of Question object
 */
export const createQuestion = async ({
  question,
  description,
  dueDate,
  language,
}: Question) => {
  const createQuestionApi = createAPIUrl(questionEndpoints.createQuestion);
  const response = await fetch(createQuestionApi, {
    method: "POST",
    body: JSON.stringify({ question, description, dueDate, language }),
  });

  return response.json();
}


export const deleteQuestion = async (id: string) => {
  const deleteQuestionApi = createAPIUrl(questionEndpoints.deleteQuestion);
  const response = await fetch(`${deleteQuestionApi}?id=${id}`, {
    method: "DELETE",
  });

  return response.json();
}