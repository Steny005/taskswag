"use client";

import React from "react";

export default function TaskTable({ tasks }) {

  return (

    <div className="p-6">

      {/* table container */}
      <div className="border border-zinc-800 rounded-2xl overflow-x-auto">

        {/* ================= TABLE HEADINGS ================= */}

        <div className="grid grid-cols-7 bg-zinc-900 p-4 font-semibold border-b border-zinc-800 min-w-[900px]">

          <div>Task</div>

          <div>Workspace</div>

          <div>Assigned By</div>

          <div>Assigned To</div>

          <div>Priority</div>

          <div>Status</div>

          <div>Due</div>

        </div>

        {/* ================= TASK ROWS ================= */}

        {tasks.map((task, index) => (

          <div
            key={index}
            className="grid grid-cols-7 min-w-[900px] p-4 border-b border-zinc-800 hover:bg-zinc-900 transition items-center"
          >

            {/* task title */}
            <div className="font-medium">

              {task.title}

            </div>

            {/* workspace */}
            <div className="text-zinc-400">

              {task.workspace}

            </div>

            {/* assigned by */}
            <div className="text-zinc-400">

              {task.assignedBy}

            </div>

            {/* assigned to */}
            <div className="text-emerald-400 font-medium">

              {task.assignedTo}

            </div>

            {/* priority badge */}
            <div>

              <span
                className={`
                  px-3 py-1 rounded-full text-sm font-medium
                  ${
                    task.priority === "High"
                      ? "bg-red-500/20 text-red-400"
                      : task.priority === "Medium"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-blue-500/20 text-blue-400"
                  }
                `}
              >

                {task.priority}

              </span>

            </div>

            {/* status badge */}
            <div>

              <span
                className={`
                  px-3 py-1 rounded-full text-sm font-medium
                  ${
                    task.status === "Completed"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : task.status === "In Progress"
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-zinc-700 text-zinc-300"
                  }
                `}
              >

                {task.status}

              </span>

            </div>

            {/* due date */}
            <div className="text-zinc-500">

              {task.due}

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}