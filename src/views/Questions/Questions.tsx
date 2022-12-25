import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

import { Animate, ModalComponent, TableComponent } from "components";
import { STATIC_CONTENT } from "../../configs/constants";
import questionTableConfigs from "../../data/questionsTableConfigs.json";
import CreateQuestion from "./CreateQuestion";
import { getQuestions } from "apis/questionApis";
import { DeleteQuestionAction as DeleteAction } from "./Actions/DeleteQuestionAction";
import { Question } from "./models";

export const Questions = () => {
  const { columns, configs } = questionTableConfigs
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refetch, setRefetch] = useState(false)

  const [isOpen, setIsOpen] = useState(false);

  const templates = {
    actions: (row: Question) => <DeleteAction row={row} onDelete={() => setRefetch(prev => !prev)} />
  }

  useEffect(() => {
    // fetch questions
    const fetchQuestions = async () => {
      setLoading(true);
      const res = await getQuestions();

      setData(res);
      setLoading(false);
    }

    fetchQuestions();
  }, [refetch]);

  return (
    <Animate show>
      <ModalComponent
        isOpen={isOpen}
        size="lg"
        toggleModal={() => setIsOpen(prev => !prev)}
        title={STATIC_CONTENT.create_new_question}
        content={<CreateQuestion onCreated={() => setRefetch(prev=>!prev)} />}
      />

      <div className="d-flex flex-row justify-content-between align-items-center mb-3">
        <h5>{STATIC_CONTENT.all_questions}</h5>

        <Button color="primary" prefix={"sas"} onClick={() => setIsOpen(true)}>
          <i className="bi bi-plus"></i> {STATIC_CONTENT.create_question}
        </Button>
      </div>

      <TableComponent
        {...{
          columns,
          configs,
          data,
          templates,
          loading
        }}
      />
    </Animate>
  );
}

export default Questions;