import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "reactstrap";

import { TableComponent } from "../../components/TableComponent/TableComponent";
import { getAllSubmissions } from "../../apis/submissionApis";
import tableConfigs from "../../data/submissionTableConfigs.json";
import { ModalComponent } from "../../components/Modal/Modal";
import { SubmissionRecord } from "./models";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Animate } from "../../components/Animate/Animate";
import { STATIC_CONTENT } from "configs/constants";

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

const Main = () => {
  const [data, setData] = useState<Array<SubmissionRecord>>([]);
  const [selectedRows, setSelectedRows] = useState<SubmissionRecord>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

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
    actions: () => "- - - - - - -"
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
  }, []);

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
              columns,
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

export default Main;
