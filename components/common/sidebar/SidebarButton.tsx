/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";

type Props = {
  path: string;
  icon: string;
  children: ReactNode;
};

const SidebarButton = ({ path, icon, children }: Props) => {
  const router = useRouter();
  const isThisPath = (pathToCheck: string) => pathToCheck === path;
  const [selected, setSelected] = useState(isThisPath(router.route));
  router.events.on("routeChangeComplete", (newPath) => {
    setSelected(isThisPath(newPath));
  });

  return (
    <Link href={path}>
      <a className="p-10 relative">
        {selected && (
          <div className="h-full w-full absolute top-0 left-0 bg-gray-500 rounded-xl" />
        )}
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center gap-1">
          <span className="text-xl">{icon}</span>
          <span className="text-white uppercase text-sm font-bold tracking-wide">
            {children}
          </span>
        </div>
      </a>
    </Link>
  );
};

export default SidebarButton;
