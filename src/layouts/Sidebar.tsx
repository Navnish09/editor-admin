import { Link, useLocation } from "react-router-dom";
import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";

const navigation = [
  {
    title: "Dashboard",
    href: "/",
    icon: "bi bi-bar-chart-steps",
  }
];

const Sidebar = () => {
  let location = useLocation();

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
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-secondary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;