import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { useState } from "react";

const DashboardTabs = () => {
  const [active, setActive] = useState(window.location.pathname);

  return (
    <Container>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            className={`nav-link ${
              active === "/dashboard/bookings" && "active"
            }`}
            to="/dashboard/bookings"
          >
            Your Bookings
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${active === "/dashboard/seller" && "active"}`}
            to="/dashboard/seller"
          >
            Your Hotels
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default DashboardTabs;
