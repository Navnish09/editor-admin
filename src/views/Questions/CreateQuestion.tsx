import React, { useRef, useState } from "react";
import { Alert, Button } from "reactstrap";

import produce from "immer";

import languages from "data/languageOptions.json";
import { CreateQuestionSchema } from "data/validationSchemas";
import createQuestionForm from "data/createQuestionForm.json";
import { Form, FormRef, Field } from "components";
import { Question } from "./models";
import { createQuestion } from "apis/questionApis";
import { STATIC_CONTENT } from "configs/constants";

type Props = {
  onCreate: () => void
}

export const CreateQuestion = ({ onCreate }: Props) => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [questionId, setQuestionId] = useState<string>("");

  const formRef = useRef<FormRef>(null);


  // Add options to language field
  const configs = produce(createQuestionForm, (draft) => {
    draft.fields.map((field: Field) => {
      if (field.name === "language") {
        field.options = languages;
      }
      return field;
    });
  })


  const addQuestion = () => {
    setLoading(true);
    formRef.current?.handleSubmit(async (data: Question) => {
      try {
        const res = await createQuestion(data);
        setQuestionId(res._id);

        // Reset form after successful submission
        formRef.current?.reset();
        onCreate();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    });
  }

  return (
    <div className="p-3">
      {
        questionId && (
          <Alert color="success">
            {`${STATIC_CONTENT.question_created} :
            ${process.env.REACT_APP_EDITOR_BASE_URL}/${questionId}`}
          </Alert>
        )
      }

      <Form
        configs={configs}
        validationSchemas={CreateQuestionSchema}
        ref={formRef}
        onValidationChange={setIsValid}
      />

      <div className="d-flex justify-content-end mt-5">
        <Button disabled={!isValid || loading} color={isValid ? "success" : "secondary"} onClick={addQuestion}>
          {!loading ? "Create" : "Creating..."}
        </Button>
      </div>
    </div>
  )
}

export default CreateQuestion;