export const CreateQuestionSchema = {
  question: {
    required: "You forgot to add a question",
  },
  description: {},
  dueDate : {
    required: "You forgot to add a due date",
  },
  language: {
    required: "You forgot to add a default language",
  },
}