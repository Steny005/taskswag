"use client";

// importing React
import React, { useState } from "react";

// importing components
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StatsCards from "@/components/StatsCards";
import TaskTable from "@/components/TaskTable";
import AddTaskModal from "@/components/AddTaskModal";

// dashboard component
export default function Dashboard() {

  // modal visibility state
  const [showModal, setShowModal] = useState(false);

  // task form states
  const [taskTitle, setTaskTitle] = useState("");

  const [assignedTo, setAssignedTo] = useState("");

  const [priority, setPriority] = useState("High");

  const [dueDate, setDueDate] = useState("");

  // temporary workspace data
  const workspaces = [
    "AI Club",
    "Cybersecurity Club",
    "Design Guild",
  ];

  // temporary task data
  const [tasks, setTasks] = useState([
    {
      title: "Design Poster",
      workspace: "AI Club",
      assignedBy: "Mathew",
      assignedTo: "Steny",
      priority: "High",
      status: "Todo",
      due: "May 25",
    },
    {
      title: "Write Report",
      workspace: "Cybersecurity Club",
      assignedBy: "Alan",
      assignedTo: "Steny",
      priority: "Medium",
      status: "Completed",
      due: "May 28",
    },
    {
      title: "Create UI",
      workspace: "Design Guild",
      assignedBy: "Sarah",
      assignedTo: "John",
      priority: "Low",
      status: "In Progress",
      due: "May 30",
    },
  ]);
// create new task
const handleCreateTask = () => {

  // validation
  if (!taskTitle || !assignedTo || !dueDate) {

    alert("Please fill all fields");

    return;
  }

  // new task object
  const newTask = {
    title: taskTitle,

    workspace: "AI Club",

    assignedBy: "Steny",

    assignedTo: assignedTo,

    priority: priority,

    status: "Todo",

    due: dueDate,
  };

  // add new task to existing tasks
  setTasks([newTask, ...tasks]);

  // clear inputs
  setTaskTitle("");

  setAssignedTo("");

  setPriority("High");

  setDueDate("");

  // close modal
  setShowModal(false);
};
  return (

    // full screen container
    <div className="flex h-screen bg-black text-white">

      {/* sidebar */}
      <Sidebar workspaces={workspaces} />

      {/* main content */}
      <div className="flex-1 overflow-y-auto">

        {/* top header */}
        <Header setShowModal={setShowModal} />

        {/* stats cards */}
        <StatsCards />

        {/* task table */}
        <TaskTable tasks={tasks} />

      </div>

      {/* add task modal */}
      <AddTaskModal
        showModal={showModal}
        setShowModal={setShowModal}

        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}

        assignedTo={assignedTo}
        setAssignedTo={setAssignedTo}

        priority={priority}
        setPriority={setPriority}

        dueDate={dueDate}
        setDueDate={setDueDate}

        handleCreateTask={handleCreateTask}

      />

    </div>

  );
}