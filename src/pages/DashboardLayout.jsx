import { useState } from "react";

import { Outlet } from "react-router-dom";
import SideBar from "../components/DashBoardComponents/sideBar";

function Dashboard({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopopen,DesktopOpen] = useState(false)
console.log(isOpen)
  return (
    <>
      <div className="flex  ">
        <div>
          <div className={`hidden md:block ${desktopopen ? "w-64" : "w-24"} bg-white text-emerald-400 min-h-screen`}>
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen} DesktopOpen={DesktopOpen}/>
          </div>
          <div className="block md:hidden bg-white text-emerald-400 min-h-screen">
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>

        <div className="flex-1 p-1 bg-white min-h-screen">
          <nav className="bg-white md:hidden  p-4 fixed top-0 left-0 z-50 flex justify-between">
            <div className="flex  justify-between gap-2 px-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-emerald-400 md:hidden"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
              <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-white text-emerald-400 md:mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#00d492"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <h1 className="text-emerald-400">
                  Welcome,
                  <span className="dancingscript text-emerald-400">
                    {" "}
                    {user?.user_metadata?.name}
                  </span>
                </h1>
              </div>
            </div>
          </nav>
          <nav className="bg-white hidden md:block w-full p-4 fixed top-0 left-0 flex justify-end ">
            <div className="flex w-full justify-end gap-2 px-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-white text-white md:mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#00d492"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <h1 className="text-emerald-400">
                  Welcome,
                  <span className="dancingscript text-emerald-400">
                    {" "}
                    {user?.user_metadata?.name}
                  </span>
                </h1>
              </div>
            </div>
          </nav>
          <div className="w-full mt-20 p-2 text-[#cecece]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
