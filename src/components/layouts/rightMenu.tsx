import { useRouter } from "next/router";
import React from "react";
import { BiLogOut } from "react-icons/bi";

const RightMenu = () => {
  const route = useRouter();

  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content relative">
            <label htmlFor="my-drawer-4">
              <li>
                <a onClick={() => route.push("/profile")}>Profile</a>
              </li>
            </label>
            <label htmlFor="my-drawer-4">
              <li>
                <a onClick={() => console.log("clicked")}>Change Password</a>
              </li>
            </label>
            <label htmlFor="my-drawer-4" className="absolute bottom-5 w-72">
              <li>
                <div className="w-full flex justify-between">
                  <p>Logout</p>
                  <BiLogOut className="rotate-180" size={18} />
                </div>
              </li>
            </label>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RightMenu;
