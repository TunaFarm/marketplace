/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useCallback, useEffect, useState } from "react";

type Props = {
  path: string;
  icon: ReactNode;
  children: ReactNode;
};

const SidebarButton = ({ path, icon, children }: Props) => {
  const router = useRouter();
  const isThisPath = useCallback(
    (pathToCheck: string) => pathToCheck === path,
    [path]
  );

  const [selected, setSelected] = useState(isThisPath(router.route));

  useEffect(() => {
    router.events.on("routeChangeComplete", (newPath) => {
      setSelected(isThisPath(newPath));
    });
  }, [isThisPath, router.events]);



  return (
    <Link href={path}>
      <a className="relative p-10">
        {selected && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-700 rounded-xl" />
        )}
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-1">
          <span className="text-xl w-[40px] h-[40px] rounded-full border-4 border-transparent hover:border-white duration-150 ease-in">{icon}</span>
          <span className={`${selected ? 'text-gray-200' : 'text-gray-500'} text-xs font-bold tracking-wide uppercase`}>
            {children}
          </span>
        </div>
      </a>
    </Link>
  );
};

export default SidebarButton;
