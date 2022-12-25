import React from "react";
import { NavLink, useLocation, useMatch, useParams } from "react-router-dom";
import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import pageRoutes from "../configs/pageRoutes.json";

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea")?.classList.toggle("showSidebar");
  };

  return (
    <div className="p-3">
      <div className="d-flex align-items-center justify-content-between">
        <Logo />
        <div className="ms-auto d-lg-none">
          <Button
            close
            size="sm"
            onClick={() => showMobilemenu()}
          ></Button>
        </div>
      </div>
      <div className="">
        <Nav vertical className="sidebarNav">
          {pageRoutes.map((route, index) => (
            <NavItem key={index} className="sidenav-bg">
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  isActive
                    ? "fw-bold text-secondary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={route.icon}></i>
                <span className="ms-3 d-inline-block">{route.title}</span>
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
