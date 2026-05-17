"use client";

import React from "react";

export default function Header({
  setShowModal,
}) {

  return (

    <div className="flex items-center justify-between p-6 border-b border-zinc-800">

      {/* left section */}
      <div>

        {/* page title */}
        <h1 className="text-3xl font-bold">

          My Inbox

        </h1>

        {/* task count */}
        <p className="text-zinc-500">

          6 tasks

        </p>

      </div>

      {/* add task button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded-xl font-medium transition"
      >

        Add Task

      </button>

    </div>

  );
}