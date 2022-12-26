import React from "react"
import { ButtonProps } from "reactstrap";

import { deleteQuestion } from "apis/questionApis"
import { ModalComponent } from "components/Modal";
import { STATIC_CONTENT } from "configs/constants";
import { Question } from "../models";

type Props = {
  row: Question,
  onDelete: () => void
}

export const DeleteQuestionAction = ({ row, onDelete }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      row._id && await deleteQuestion(row._id);
      onDelete();
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const footerButtons: ButtonProps[] = [
    {
      text: "Cancel",
      color: "secondary",
      disabled: loading,
      onClick: () => setIsOpen(false)
    },
    {
      text: !loading ? "Delete" : "Deleting...",
      color: "danger",
      disabled: loading,
      onClick: handleDelete
    },
  ]

  return (
    <>
      <ModalComponent
        isOpen={isOpen}
        size="md"
        centered
        title={STATIC_CONTENT.confirm}
        toggle={() => setIsOpen(prev => !prev)}
        content={<>Are you sure you want to delete this question?</>}
        footerButtons={footerButtons}
      />

      <div className="d-flex align-items-center justify-content-center">
        <span className="text-danger delete-Icon" onClick={() => setIsOpen(true)}>
          <i className="bi bi-trash3-fill"></i>
        </span>
      </div>
    </>
  )
}