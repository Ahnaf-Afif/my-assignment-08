"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House } from "lucide-react";
import { History } from "lucide-react";
import { ChartNoAxesColumnDecreasing } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div>
      <div
        className="navbar bg-base-100 shadow-sm px-3 md:px-10
      "
      >
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-3xl font-bold">
            Keen<span className="text-[#244D3F]">Keeper</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <div className="hidden md:flex ">
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
                  href="/Timeline"
                  className={
                    pathname === "/Timeline" ? "bg-[#244D3F] text-white" : ""
                  }
                >
                  <History />
                  Timeline
                </Link>
              </li>
              <li>
                <Link
                  href="/Stats"
                  className={
                    pathname === "/Stats" ? "bg-[#244D3F] text-white" : ""
                  }
                >
                  <ChartNoAxesColumnDecreasing />
                  Stats
                </Link>
              </li>
            </div>
            <li>
              <details className="block md:hidden">
                <summary>Pages</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link
                      href="/"
                      className={
                        pathname === "/" ? "bg-[#244D3F] text-white" : ""
                      }
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Timeline"
                      className={
                        pathname === "/Timeline"
                          ? "bg-[#244D3F] text-white"
                          : ""
                      }
                    >
                      Timeline
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Stats"
                      className={
                        pathname === "/Stats" ? "bg-[#244D3F] text-white" : ""
                      }
                    >
                      Stats
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
