import React from "react";
import { EllipsisOutlined } from "@ant-design/icons";

export default function Column() {
  return (
    <div className="w-72 p-4 rounded-md shadow-md bg-gray-100">
      {/* title bar */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">To Do</h3>

        {/* Column option button */}
        <button className="text-lg text-gray-600 font-bold">
          <EllipsisOutlined />
        </button>
      </div>

      {/* Content Box */}
      <div>
        {/* content item */}
        <div className="bg-white p-3 rounded-md shadow-md mt-4">
          {/* item title */}
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold">Task 1</h4>

            {/* Task option button */}
            <button className="text-lg text-gray-600 font-bold">
              <EllipsisOutlined />
            </button>
          </div>

          {/* description */}
          <p className="text-xs text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
