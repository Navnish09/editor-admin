import { Props } from "../models";

// Component for rendering the table body
export const TableBody = ({ data, columns, templates }: Props) => {
  return (
    <tbody>
      {data.map((tdata, index) => {
        const columnKeys = columns.map((column) => column.accessor);

        return (
          <tr key={index} className="border-top">
            {columnKeys.map((column, tdIndex) => {

              return (
                <td
                  key={`${tdIndex}-${column}`} className="align-middle"
                  style={{
                    width: columns[tdIndex].width,
                    ...columns[tdIndex].grow ? { flexGrow: 1 } : {},
                  }}>
                  {
                    // Render the cell content or template,Even empty, if it is available in the columns list
                    (tdata[column] || templates?.[column]) ? (
                      templates?.[column]?.({ ...tdata, index }) || tdata[column]
                    ) : null
                  }
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  )
}
