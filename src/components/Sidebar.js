"use client";

import React from "react";

import {
  LayoutDashboard,
  Plus,
  LogOut,
} from "lucide-react";

export default function Sidebar({ workspaces }) {

  return (

    <div className="w-72 border-r border-zinc-800 flex flex-col justify-between">

      {/* top section */}
      <div>

        {/* logo */}
        <div className="flex items-center gap-3 p-6 border-b border-zinc-800">

          <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">

            <LayoutDashboard size={20} />

          </div>

          <h1 className="text-2xl font-bold">
            taskswag
          </h1>

        </div>

        {/* inbox */}
        <div className="p-4">

          <button className="w-full flex items-center justify-between bg-zinc-900 hover:bg-zinc-800 p-4 rounded-xl transition">

            <div className="flex items-center gap-3">

              <LayoutDashboard size={18} />

              <span>My Inbox</span>

            </div>

            <span className="bg-zinc-700 px-2 py-1 rounded-lg text-sm">
              6
            </span>

          </button>

        </div>

        {/* workspace heading */}
        <div className="px-6 py-2 text-zinc-500 text-sm font-semibold">

          WORKSPACES

        </div>

        {/* workspace list */}
        <div className="px-3 flex flex-col gap-2">

          {workspaces.map((workspace, index) => (

            <button
              key={index}
              className="flex items-center justify-between hover:bg-zinc-900 p-3 rounded-xl transition"
            >

              <span>{workspace}</span>

              <span className="text-zinc-500 text-sm">
                {index + 3}
              </span>

            </button>

          ))}

        </div>

        {/* new workspace */}
        <div className="p-4">

          <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition">

            <Plus size={18} />

            <span>New Workspace</span>

          </button>

        </div>

      </div>

      {/* profile */}
      <div className="border-t border-zinc-800 p-4">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="font-semibold">
              Steny
            </h2>

            <p className="text-zinc-500 text-sm">
              steny@example.com
            </p>

          </div>

          <button className="text-zinc-400 hover:text-red-500 transition">

            <LogOut size={18} />

          </button>

        </div>

      </div>

    </div>
  );
}