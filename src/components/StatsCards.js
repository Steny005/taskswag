"use client";

import React from "react";

export default function StatsCards({ stats, }) {

  // stats data
  const statsData = [
    {
      title: "Total",
      value: stats.total,
      color: "text-white",
    },
    {
      title: "Todo",
      value: stats.todo,
      color: "text-white",
    },
    {
      title: "In Progress",
      value: stats.inProgress,
      color: "text-blue-400",
    },
    {
      title: "Completed",
      value: stats.completed,
      color: "text-emerald-400",
    },
  ];

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-6">

      {/* looping through stats */}
      {statsData.map((stat, index) => (

        <div
          key={index}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
        >

          {/* card title */}
          <h2 className="text-zinc-500">

            {stat.title}

          </h2>

          {/* card value */}
          <p className={`text-4xl font-bold mt-2 ${stat.color}`}>

            {stat.value}

          </p>

        </div>

      ))}

    </div>

  );
}