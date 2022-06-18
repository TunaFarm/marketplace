import UserSection from "./UserSection";

const TopBar = () => (
  <div className="fixed h-[60px] top-0 z-50 flex justify-between items-center w-full px-4 bg-[#14181d] border-b border-gray-500">
    <span className="text-xl font-medium text-white">Spellcaster</span>
    <UserSection />
  </div>
);

export default TopBar;
