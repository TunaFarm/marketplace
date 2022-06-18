/* eslint-disable @next/next/no-img-element */
import SidebarButton from "./SidebarButton";

const Sidebar = () => (
  <div className="flex flex-col p-1 gap-1 w-[90px] fixed left-0 top-[60px] bg-[#14181d] h-[calc(100vh-60px)]">
    <SidebarButton icon={<img className="w-full" src="https://www.sandbox.game/img/02_Side_Bar/svg/home-icon.svg" alt="icon home"/>} path="/">
      Home
    </SidebarButton>
    <SidebarButton icon={<img className="w-full" src="https://www.sandbox.game/img/02_Side_Bar/svg/shop-icon.svg" alt="icon market"/>}  path="/market">
      Market
    </SidebarButton>
    <SidebarButton icon={<img className="w-full" src="https://www.sandbox.game/img/02_Side_Bar/svg/about-icon.svg" alt="icon about"/>} path="/about">
      About
    </SidebarButton>
  </div>
);

export default Sidebar;
