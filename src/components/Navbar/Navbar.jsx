"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House } from "lucide-react";
import { History } from "lucide-react";
import { ChartNoAxesColumnDecreasing } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { TvMinimalPlay } from "lucide-react";
import { LogIn } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const defaultImage =
  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";

const Navbar = () => {
  const pathname = usePathname();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  console.log(user);

  return (
    <div className="navbar bg-base-100 shadow-sm px-3 md:px-10">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-3xl font-bold">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>

          <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
            SkillSphere
          </span>
        </Link>
      </div>

      <div className="hidden md:flex flex-1 justify-center">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link
              href="/"
              className={pathname === "/" ? "bg-[#244D3F] text-white" : ""}
            >
              <House />
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/AllCourses"
              className={
                pathname === "/AllCourses" ? "bg-[#244D3F] text-white" : ""
              }
            >
              <TvMinimalPlay />
              Courses
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex-1 flex justify-end items-center gap-2 md:px-3">
        {isPending ? (
          <span className="loading loading-bars loading-lg"></span>
        ) : user ? (
          <div className="hidden md:flex items-center gap-2">
            <p>Hello, {user?.name}</p>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="profile"
                  src={user?.image || defaultImage}
                  onError={(e) => {
                    e.currentTarget.src = defaultImage;
                  }}
                />
              </div>
            </div>
            <Link href="/Profile" className="btn">
              <button>Profile</button>
            </Link>
            <Link
              href="/"
              className={`btn ${
                pathname === "/Login" ? "bg-[#244D3F] text-white" : ""
              }`}
            >
              <LogIn />
              <button onClick={async () => await authClient.signOut()}>
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-2">
            {/* <p>Hello, {user?.name}</p> */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {/* <img
                  alt="profile"
                  src={
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                /> */}
              </div>
            </div>
            <Link
              href="/Login"
              className={`btn ${
                pathname === "/Login" ? "bg-[#244D3F] text-white" : ""
              }`}
            >
              <LogIn />
              Login
            </Link>
          </div>
        )}

        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            Menu
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {user && (
              <li className="px-3 py-2">
                <div className="flex items-center gap-2 p-0">
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img
                        alt="profile"
                        src={user?.image || defaultImage}
                        onError={(e) => {
                          e.currentTarget.src = defaultImage;
                        }}
                      />
                    </div>
                  </div>
                  <span>Hello, {user?.name}</span>
                </div>
              </li>
            )}

            <li>
              <Link
                href="/"
                className={pathname === "/" ? "bg-[#244D3F] text-white" : ""}
              >
                <House />
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/AllCourses"
                className={
                  pathname === "/AllCourses" ? "bg-[#244D3F] text-white" : ""
                }
              >
                <TvMinimalPlay />
                Courses
              </Link>
            </li>

            <li>
              {user ? (
                <Link
                  href="/Profile"
                  className={
                    pathname === "/Profile" ? "bg-[#244D3F] text-white" : ""
                  }
                >
                  Profile
                </Link>
              ) : (
                <Link
                  href="/Login"
                  className={
                    pathname === "/Login" ? "bg-[#244D3F] text-white" : ""
                  }
                >
                  <LogIn />
                  Login
                </Link>
              )}
            </li>

            {user && (
              <li>
                <button onClick={async () => await authClient.signOut()}>
                  <LogIn />
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
