import { deleteQuestion } from "apis/questionApis"
import React from "react"
import { Question } from "../models";

type Props = {
  row: Question,
  onDelete: () => void
}

export const DeleteQuestionAction = ({ row, onDelete }: Props) => {
  
  const handleDelete = async () => {
    try {
      row._id && await deleteQuestion(row._id);
      onDelete();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="d-flex align-items-center">
      <span className="text-danger delete-Icon" onClick={handleDelete}>
        <i className="bi bi-trash3"></i>
      </span>
    </div>
  )
}