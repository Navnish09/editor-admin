import React from "react";
import { Column } from "../models"

// Component for rendering the table head
export const TableHead = ({ columns }: { columns: Column[] }) => {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th
            style={{
              width: column.width || "auto",
              textAlign : column.align || "left",
              ...column.grow ? { flexGrow: 1 } : {},
            }}
            key={`${index}-${column.accessor}`}
            className="border-0 font-medium">
            {column.Header}
          </th>
        ))}
      </tr>
    </thead>
  )
}