import React, { Suspense } from "react";
import { Container } from "reactstrap";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";
import { Animate } from "../components/Animate/Animate";

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
          <Container className="py-4 px-5 wrapper" fluid>
            <Suspense fallback={null}>
              <Animate show>
                <Outlet />
              </Animate>
            </Suspense>
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
