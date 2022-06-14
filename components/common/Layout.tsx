import { ReactNode } from "react";
import Sidebar from "./sidebar/Sidebar";
import TopBar from "./TopBar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="h-screen w-screen bg-gray-400 flex flex-col">
    <TopBar />
    <div className="flex flex-1">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  </div>
);

export default Layout;
