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
              ...column.grow ? { flexGrow: 1 } : {},
            }}
            key={`${index}-${column.accessor}`}
            className="border-0 text-uppercase font-medium">
            {column.Header}
          </th>
        ))}
      </tr>
    </thead>
  )
}