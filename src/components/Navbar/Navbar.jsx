"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House } from "lucide-react";
import { History } from "lucide-react";
import { ChartNoAxesColumnDecreasing } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { TvMinimalPlay } from "lucide-react";
import { LogIn } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
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

      <div className="flex-1 flex justify-end items-center gap-2">
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/Login"
            className={`btn ${
              pathname === "/Login" ? "bg-[#244D3F] text-white" : ""
            }`}
          >
            <LogIn />
            Login
          </Link>

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            Menu
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
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
              <Link
                href="/Login"
                className={
                  pathname === "/Login" ? "bg-[#244D3F] text-white" : ""
                }
              >
                <LogIn />
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
