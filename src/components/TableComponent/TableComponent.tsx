import { STATIC_CONTENT } from "configs/constants";
import React, { ReactNode } from "react";
import { Card, CardBody, Spinner, Table } from "reactstrap";
import { TableBody, TableHead, TableInfo } from "./components";
import { TableProps } from "./models";

const TableLoader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Spinner color="secondary" />
    </div>
  )
}

const EmptyMessage = ({ message }: { message: ReactNode }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <h5>{message}</h5>
    </div>
  )
}

export const TableComponent = ({ columns, data, templates, configs, loading, rowHover = true }: TableProps) => {
  const isInfoAvailable = configs?.title || configs?.subtitle;
  return (
    <>
      <Card>
        <CardBody>
          <TableInfo title={configs?.title || ""} subtitle={configs?.subtitle || ""} />

          <Table className={`no-wrap ${isInfoAvailable ? `mt-3` : `mb-0`} align-middle`} responsive borderless hover={rowHover} >

            {!loading ? (
              <>
                <TableHead columns={columns} />
                {
                  // Render the table body only if the data is available
                  data?.length > 0 && (
                    <TableBody {...{ data, columns, templates, loading }} />
                  )
                }
              </>
            ) : <TableLoader />}

          </Table>

        </CardBody>
      </Card>

      {
        data.length === 0 && !loading && (
          <EmptyMessage message={configs?.noDataMessage} />
        )
      }
    </>

  );
};

export default TableComponent;
