import React from "react"
import { ButtonProps } from "reactstrap";

import { deleteSubmission } from "apis/submissionApis";
import { ModalComponent } from "components/Modal";
import { STATIC_CONTENT } from "configs/constants";
import { SubmissionRecord } from "../models";

type Props = {
  row: SubmissionRecord,
  onDelete: () => void
}

export const DeleteSubmissionAction = ({ row, onDelete }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      row._id && await deleteSubmission(row._id);
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
        content={STATIC_CONTENT.submission_delete_confirm}
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