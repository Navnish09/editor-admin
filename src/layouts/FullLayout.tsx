import React from "react";
import { Container } from "reactstrap";

import Main from "../views/Main/Main";

import Sidebar from "./Sidebar";
import Header from "./Header";

const FullLayout = () => {
  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}
        <div className="contentArea">
          {/********header**********/}
          <Header />
          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            <Main />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
