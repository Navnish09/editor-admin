import React from "react";
import { Card, CardBody, Spinner, Table } from "reactstrap";
import { TableBody, TableHead, TableInfo } from "./components";
import { Props } from "./models";

const TableLoader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Spinner color="secondary" />
    </div>
  )
}

export const TableComponent = ({ columns, data, templates, configs, loading, rowHover = true }: Props) => {
  const isInfoAvailable = configs?.title || configs?.subtitle;
  return (
    <Card>
      <CardBody>
        <TableInfo title={configs?.title || ""} subtitle={configs?.subtitle || ""} />

        <Table className={`no-wrap ${isInfoAvailable ? `mt-3` : `mb-0`} align-middle`} responsive borderless hover={rowHover} >
          
          {!loading ? (
            <>
              <TableHead columns={columns} />
              <TableBody {...{ data, columns, templates, loading }} />
            </>
          ) : <TableLoader />}
          
        </Table>
      </CardBody>
    </Card>
  );
};

export default TableComponent;
