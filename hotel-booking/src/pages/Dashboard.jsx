import UserInfo from "../components/user/UserInfo";
import DashboardTabs from "../components/DashboardTabs";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <>
      <UserInfo />
      <DashboardTabs />
      <div>
        ----
        <Outlet />
        ----
      </div>
    </>
  );
};

export default Dashboard;
