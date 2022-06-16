import UserSection from "./UserSection";

const TopBar = () => (
  <div className="flex justify-between px-4 py-2 bg-yellow-400">
    <span className="text-xl">Spellcaster</span>
    <UserSection />
  </div>
);

export default TopBar;
