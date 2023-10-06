import { useRouter } from "next/router";
import React from "react";

type LeftMenuProps = {
  children: React.ReactNode;
};

const LeftMenu = ({ children }: LeftMenuProps) => {
  const route = useRouter();
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{children}</div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <label htmlFor="my-drawer-2">
              <li>
                <a onClick={() => route.push("/")}>Home</a>
              </li>
            </label>
            <label htmlFor="my-drawer-2">
              <li>
                <a onClick={() => route.push("/newsletter")}>Newsletters</a>
              </li>
            </label>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftMenu;
