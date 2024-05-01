import { EllipsisOutlined } from "@ant-design/icons";
import TaskCard from "./TaskCard";
import DropAreaCart from "@/Components/DragAndDrop/DropAreaCart";
import React from "react";

// Desc: TaskColumn component for the website
export default function TaskColumn({
  status,
  title,
  tasks,
  setActiveCard,
  onDrop,
}) {
  return (
    <div className="min-w-72 p-4 rounded-md shadow-md bg-[#ededed]">
      {/* title bar */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>

        {/* Column option button */}
        <button className="text-lg text-gray-600 font-bold">
          <EllipsisOutlined />
        </button>
      </div>

      {/* Content Box */}
      <div>
        <DropAreaCart onDrop={() => onDrop(status, 0)} />

        {/* content item */}
        {tasks.length > 0 ? (
          tasks.map((task, idx) => (
            <React.Fragment key={task?.id}>
              <TaskCard task={task} idx={idx} setActiveCard={setActiveCard} />
              <DropAreaCart onDrop={() => onDrop(status, idx + 1)} />
            </React.Fragment>
          ))
        ) : (
          <p className="text-gray-600 text-sm mt-3">No task available</p>
        )}
      </div>
    </div>
  );
}
