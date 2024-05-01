import { useZustandStore } from "@/Store/Store";
import TaskColumn from "./TaskColumn";
import { useState } from "react";

// Desc: TaskContainer component for the website
export default function TaskContainer() {
  const { tasks } = useZustandStore();
  const [activeCard, setActiveCard] = useState(null);

  // divide tasks into different columns based on status
  const toTask = tasks.filter((task) => task.status == "notStarted");
  const inProgressTask = tasks.filter((task) => task.status == "inProgress");
  const testingTask = tasks.filter((task) => task.status === "testing");
  const deploymentTask = tasks.filter((task) => task.status === "deployment");
  const completedTask = tasks.filter((task) => task.status === "completed");

  // return the TaskContainer component
  // console.log("toTask ", toTask);
  // console.log("inProgressTask ", inProgressTask);
  // console.log("testingTask ", testingTask);
  // console.log("deploymentTask ", deploymentTask);
  // console.log("completedTask ", completedTask);

  // console.log("tasks ", tasks);

  // on drag position
  const onDrop = (status, position) => {
    console.log(
      `${activeCard} is goging to place into ${status} and at the position ${position}`
    );
  };

  return (
    <>
      {/* task Container */}
      <div className="flex items-start justify-start gap-5">
        <TaskColumn
          title=" To task"
          status="notStarted"
          tasks={toTask}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="In Progress"
          status="inProgress"
          tasks={inProgressTask}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Testing"
          status="testing"
          tasks={testingTask}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Deployment"
          status="deployment"
          tasks={deploymentTask}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Complete"
          status="completed"
          tasks={completedTask}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </div>

      <h1> catch task index : {activeCard} </h1>
    </>
  );
}
