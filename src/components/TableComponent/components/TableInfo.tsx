import React from "react";
import { CardSubtitle, CardTitle } from "reactstrap"
import { Info } from "../models"

export const TableInfo = ({ title, subtitle }: Info) => {
  return (
    <>
      {title && <CardTitle tag="h5">{title}</CardTitle>}
      {
        subtitle && (
          <CardSubtitle className="mb-2 text-muted" style={{fontSize : '0.9rem'}} tag="p">{subtitle}</CardSubtitle>
        )
      }
    </>
  )
}