import React from "react";
import Navbar from "../layouts/navbar";
import LeftMenu from "../layouts/leftMenu";
import RightMenu from "../layouts/rightMenu";

type Props = {
  children: React.ReactNode;
};

const Dashboard = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <LeftMenu>{children}</LeftMenu>
      <RightMenu />
    </div>
  );
};

export default Dashboard;
