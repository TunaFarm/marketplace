import { ReactNode } from "react";
import Sidebar from "./sidebar/Sidebar";
import TopBar from "./topbar/TopBar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="flex flex-col h-screen bg-gray-400 w-full">
    <TopBar />
    <div className="flex flex-1">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  </div>
);

export default Layout;
