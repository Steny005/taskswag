"use client";

import React from "react";
import { Trash2 } from "lucide-react";

export default function TaskTable({ 
  tasks,
  handleDeleteTask,
  handleUpdateStatus,
  handleUpdatePriority,
  handleUpdateDate
}) {

  return (

    <div className="p-6">

      {/* table container */}
      <div className="border border-zinc-800 rounded-2xl overflow-x-auto">

        {/* ================= TABLE HEADINGS ================= */}

        <div className="grid grid-cols-8 bg-zinc-900 p-4 font-semibold border-b border-zinc-800 min-w-[900px]">

          <div>Task</div>

          <div>Workspace</div>

          <div>Assigned By</div>

          <div>Assigned To</div>

          <div>Priority</div>

          <div>Status</div>

          <div>Due</div>

          <div></div>

        </div>

        {/* ================= TASK ROWS ================= */}

        {tasks.map((task, index) => (

          <div
            key={index}
            className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr_1.2fr_0.5fr] min-w-[900px] p-4 border-b border-zinc-800 hover:bg-zinc-900 transition items-center"
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

              <select
                value={task.priority}
                onChange={(e) => handleUpdatePriority(task.id, e.target.value)}
                className={`
                  px-3 py-1 rounded-full text-sm font-medium bg-black border outline-none
                  ${
                    task.priority === "High"
                      ? "border-zinc-500 text-red-400"
                    : task.priority === "Medium"
                      ? "border-zinc-500 text-yellow-400"
                      : "border-zinc-500 text-blue-400"
                  }
                `}
              >

                <option value="High">High</option>
                <option value="Medium">Medium</option> 
                <option value="Low">Low</option>

              </select>

            </div>

            {/* status badge */}
            <div>

              <button
                onClick={() =>
                  handleUpdateStatus(task.id, task.status)
                }

                className={`
                  px-3 py-1 rounded-full text-sm font-medium
                  transition
                  ${
                    task.status === "Completed"
                      ? "bg-emerald-500/20 text-emerald-400"
                    : task.status === "In Progress"
                      ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-zinc-700 text-zinc-300"
                  }
                `}
              >

                {task.status}

              </button>

            </div>

            {/* due date */}
            <div className="text-zinc-200">

              <input type="date"
              min={new Date()
              .toISOString()
              .split("T")[0]} // set minimum date to today
              
              value={task.due}
              onChange={(e) => handleUpdateDate(task.id, e.target.value)}
              className="bg-black border border-zinc-700 rounded-lg py-1 px-2 outline-none text-zinc-300
              "
              />

            </div>

            <div>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="text-red-500 hover:text-red-600 transition"
              >
                <Trash2 size={18} />
              </button>
            </div>

          </div>

        ))}

      </div>

    </div>

  );
}