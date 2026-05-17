"use client";

import React from "react";

export default function StatsCards() {

  // stats data
  const stats = [
    {
      title: "Total",
      value: 6,
      color: "text-white",
    },
    {
      title: "Todo",
      value: 3,
      color: "text-white",
    },
    {
      title: "In Progress",
      value: 1,
      color: "text-blue-400",
    },
    {
      title: "Completed",
      value: 2,
      color: "text-emerald-400",
    },
  ];

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-6">

      {/* looping through stats */}
      {stats.map((stat, index) => (

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