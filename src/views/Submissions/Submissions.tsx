import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "reactstrap";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { getAllSubmissions } from "apis/submissionApis";
import { TableComponent, ModalComponent, Animate, Column } from "components";
import { STATIC_CONTENT } from "configs/constants";
import tableConfigs from "data/submissionTableConfigs.json";
import { SubmissionRecord } from "./models";
import { DeleteSubmissionAction } from "./Actions/DeleteSubmissionAction";

const CodeSnippet = ({ code, language }: { code: string, language?: string }) => {

  return (
    <div style={{ maxHeight: "80vh" }}>
      <SyntaxHighlighter
        language={language || "solidity"}
        style={oneDark}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export const Submissions = () => {
  const [data, setData] = useState<Array<SubmissionRecord>>([]);
  const [selectedRows, setSelectedRows] = useState<SubmissionRecord>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);

  const { configs, columns } = tableConfigs;
  
  const handleViewCode = (row: SubmissionRecord) => {
    setIsModalOpen(true);
    setSelectedRows(row)
  };
  /**
   *  Templates for the submission table to attach custom components
   *  */
  const templates = {
    code: (row: SubmissionRecord) => {
      return (
        <Button outline size="sm" onClick={() => handleViewCode(row)}>
          View
        </Button>
      )
    },
    actions: (row: SubmissionRecord) => <DeleteSubmissionAction row={row} onDelete={() => setRefetch(prev => !prev)} />
  }

  /**
   * Fetch all submissions from the API
   */
  useEffect(() => {
    !loading && setLoading(true);

    (async () => {
      try {
        const data = await getAllSubmissions();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [refetch]);

  return (
    <Animate show>
      <ModalComponent
        isOpen={isModalOpen}
        size="lg"
        content={<CodeSnippet code={selectedRows?.code || ""} language={selectedRows?.language}  />}
        title={STATIC_CONTENT.submitted_code}
        toggle={() => setIsModalOpen(false)}
      />

      <Row>
        <Col lg="12">
          <TableComponent
            {...{
              configs,
              columns : columns as Column[],
              data,
              templates,
              loading
            }}
          />
        </Col>
      </Row>
    </Animate>
  );
};

export default Submissions;
