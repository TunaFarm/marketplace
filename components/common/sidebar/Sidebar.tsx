import SidebarButton from "./SidebarButton";

const Sidebar = () => (
  <div className="bg-neutral-800 flex flex-col p-1 gap-1">
    <SidebarButton icon="🏠" path="/">
      Home
    </SidebarButton>
    <SidebarButton icon="🍎" path="/market">
      Market
    </SidebarButton>
    <SidebarButton icon="ℹ️" path="/about">
      About
    </SidebarButton>
  </div>
);

export default Sidebar;
