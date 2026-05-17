"use client";

// importing React
import React, { useState,useEffect, } from "react";
import {supabase } from "@/lib/supabase";

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

  const [selectedWorkspace, setSelectedWorkspace] = useState("AI Club");

  const [assignedTo, setAssignedTo] = useState("");

  const [priority, setPriority] = useState("High");

  const today = new Date();
  const thirdDay = new Date(
    today.setDate(today.getDate() + 3)
  );
  const formattedDate = thirdDay.toISOString().split("T")[0];
  const [dueDate, setDueDate] = useState(formattedDate);

  // temporary workspace data
  const workspaces = [
    "AI Club",
    "Cybersecurity Club",
    "Design Guild",
  ];

  // temporary task data
  const [tasks, setTasks] = useState([]);
    

// create new task

  // fetch tasks from database
const fetchTasks = async () => {

  // ask supabase for tasks
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  // if error happens
  if (error) {

    console.log(error);

    return;
  }

  // convert database format
  const formattedTasks = data.map((task) => ({
    id: task.id,
    title: task.title,
    workspace: task.workspace,
    assignedBy: task.assigned_by,
    assignedTo: task.assigned_to,
    priority: task.priority,
    status: task.status,
    due: task.due_date,
  }));

  // update frontend state
  setTasks(formattedTasks);
};

const handleDeleteTask = async (id) => {
  const { error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", id);

    if (error) {
      console.log("Error deleting task:", error);
      alert("Failed to delete task. Please try again.");
      return;
    }

    fetchTasks();
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


  const handleCreateTask = async () => {

  // validation
  if (!taskTitle || !assignedTo || !dueDate) {

    alert("Please fill all fields");

    return;
  }

  const todayDate = new Date().toISOString().split("T")[0];
  if (dueDate < todayDate) {
    alert("Due date cannot be in the past");
    return;
  }
  // add new task to existing tasks
  const{ data, error } = await supabase
    .from("tasks")
    .insert([{
      title: taskTitle,
      workspace: selectedWorkspace,
      assigned_by: "Steny",
      assigned_to: assignedTo,
      priority: priority,
      status: "Todo",
      due_date: dueDate,
    }])
    .select();

  if (error) { 
    console.log("Error inserting task:", error);
    alert("Failed to create task. Please try again.");
    return;
  }

  setTasks([{
  id: data[0].id,
  title: data[0].title,
  workspace: data[0].workspace,
  assignedBy: data[0].assigned_by,
  assignedTo: data[0].assigned_to,
  priority: data[0].priority,
  status: data[0].status,
  due: data[0].due_date,
}, ...tasks
    ]);

  // clear inputs
  setTaskTitle("");
  setAssignedTo("");
  setPriority("High");
  setDueDate(formattedDate);
  // close modal
  setShowModal(false);
};

 useEffect(() => {
    fetchTasks();
  }, []);

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
        <TaskTable
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}      
        />

      </div>

      {/* add task modal */}
      <AddTaskModal
        showModal={showModal}
        setShowModal={setShowModal}

        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}

        assignedTo={assignedTo}
        setAssignedTo={setAssignedTo}

        selectedWorkspace={selectedWorkspace}
        setSelectedWorkspace={setSelectedWorkspace}
        workspaces={workspaces}

        priority={priority}
        setPriority={setPriority}

        dueDate={dueDate}
        setDueDate={setDueDate}

        handleCreateTask={handleCreateTask}

      />

    </div>

  );
}