"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/app/components/ui/button";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  CalendarDaysIcon,
  MagnifyingGlassIcon,
  BanknotesIcon,
} from "./ui/icons";

import { signOut } from "next-auth/react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="h-screen w-full flex-shrink-0 max-w-[20rem] p-4 shadow-xl shadow-gray-900/5 rounded-bl-none rounded-tl-none bg-white">
      <div className="mb-2 flex items-center gap-4 p-4">
        <Image src="/agenda.svg" alt="agenda" height={32} width={32} />
        <h5 className="text-2xl font-semibold color-gray">Agenda Master</h5>
      </div>
      <ScrollArea className="space-y-4">
        <div className="px-3">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pr-10 pl-3 border border-gray-300 rounded"
            />
          </div>

          <div className="space-y-1 mt-4 text-gray-700">
            <Button
              variant="ghost"
              className="w-full justify-start text-lg font-normal py-6"
            >
              <PresentationChartBarIcon className="mr-3 h-5 w-5" />
              Dashboard
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-lg font-normal py-6"
            >
              <CalendarDaysIcon className="mr-3 h-5 w-5" />
              Timeline
            </Button>

            <div>
              <Button
                onClick={() => handleOpen(!open)} // Toggle the open state
                variant="ghost"
                className="w-full justify-start text-lg font-normal py-6 flex items-center"
              >
                <BanknotesIcon className="mr-3 h-5 w-5" />
                Finances
                <ChevronDownIcon
                  className={`ml-auto transform transition-transform h-5 w-5 ${
                    open ? "rotate-180" : ""
                  }`}
                  strokeWidth={2.5}
                />
              </Button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-1 mt-2 pl-4">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-lg font-normal py-6"
                  >
                    <ChevronRightIcon
                      strokeWidth={3}
                      className="mr-3 h-3 w-5"
                    />
                    Financial Aid
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-lg font-normal py-6"
                  >
                    <ChevronRightIcon
                      strokeWidth={3}
                      className="mr-3 h-3 w-5"
                    />
                    FASFA
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-lg font-normal py-6"
                  >
                    <ChevronRightIcon
                      strokeWidth={3}
                      className="mr-3 h-3 w-5"
                    />
                    TAP
                  </Button>
                </div>
              </div>
            </div>

            <hr className="my-2 border-t border-gray-200" />

            <Button
              variant="ghost"
              className="w-full justify-start text-lg font-normal py-6"
            >
              <InboxIcon className="mr-3 h-5 w-5" />
              Inbox
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-lg font-normal py-6"
            >
              <UserCircleIcon className="mr-3 h-5 w-5" />
              Profile
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-lg font-normal py-6"
            >
              <Cog6ToothIcon className="mr-3 h-5 w-5" />
              Settings
            </Button>
            <Button
              onClick={() => signOut({ callbackUrl: "/login" })}
              variant="ghost"
              className="w-full justify-start text-lg font-normal py-6"
            >
              <PowerIcon className="mr-3 h-5 w-5" />
              Log Out
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
