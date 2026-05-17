"use client";

import React from "react";

import { X } from "lucide-react";
import { useSelectedLayoutSegment } from "next/navigation";

export default function AddTaskModal({

  showModal,
  setShowModal,

  taskTitle,
  setTaskTitle,

  assignedTo,
  setAssignedTo,

  selectedWorkspace,
  setSelectedWorkspace,
  workspaces,

  priority,
  setPriority,

  dueDate,
  setDueDate,

  handleCreateTask,

}) {

  // if modal is closed
  // don't render anything
  if (!showModal) return null;

  return (

    // dark overlay
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      {/* modal container */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-lg p-6">

        {/* ================= HEADER ================= */}

        <div className="flex items-center justify-between mb-6">

          {/* modal title */}
          <h2 className="text-2xl font-bold">

            Create Task

          </h2>

          {/* close button */}

<button
  onClick={() => setShowModal(false)}
  className="bg-zinc-800 hover:bg-zinc-700 p-2 rounded-xl"
>
            <X size={22} />

          </button>

        </div>

        {/* ================= FORM ================= */}

        <div className="flex flex-col gap-4">

          {/* task title input */}
          <input
            type="text"
            placeholder="Task Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="bg-black border border-zinc-700 rounded-xl p-3 outline-none"
          />

          {/* assign to input */}
          <input
            type="text"
            placeholder="Assign To"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            className="bg-black border border-zinc-700 rounded-xl p-3 outline-none"
          />

          {/* workspace selection */}
          <select
            value={selectedWorkspace}
            onChange={(e) => setSelectedWorkspace(e.target.value)}
            className="bg-black border border-zinc-700 rounded-xl p-3 outline-none"
          >
            {workspaces.map((workspace, index) => (
              <option key={index}>
                {workspace}
              </option>
            ))}
          </select>

          {/* priority dropdown */}
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="bg-black border border-zinc-700 rounded-xl p-3 outline-none"
          >

            <option>High</option>

            <option>Medium</option>

            <option>Low</option>

          </select>

          {/* due date input */}
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]} // set minimum date to today
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="bg-black border border-zinc-700 rounded-xl p-3 outline-none"
          />

          {/* ================= BUTTONS ================= */}

          <div className="flex justify-end gap-3 mt-4">

            {/* cancel button */}
            <button
              onClick={() => setShowModal(false)}
              className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-xl"
            >

              Cancel

            </button>

            {/* create task button */}
            {/* create task button */}
<button
  onClick={handleCreateTask}
  className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-xl"
>

  Create Task

</button>

          </div>

        </div>

      </div>

    </div>

  );
}