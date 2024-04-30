import Image from "next/image";
import React from "react";
import projectLogo from "@/Assets/project-logo.jpg";
import team1 from "@/Assets/avatar/user-1.jpg";
import team2 from "@/Assets/avatar/user-2.png";
import team3 from "@/Assets/avatar/user-3.jpg";
import team4 from "@/Assets/avatar/user-4.png";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";

// desc: ProjectBrief component will be used to display the brief details of the project.
export default function ProjectBrief() {
  return (
    <div>
      <div className="flex items-start justify-start gap-5 divide-x-2">
        {/* image */}
        <div className="p-4">
          <figure className="max-w-60 max-h-60 rounded-full shadow-md">
            <Image
              className="w-full h-full rounded-full"
              src={projectLogo}
              alt="project logo"
            />
          </figure>
        </div>

        {/* content */}
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Project Name</h2>
          <p className="text-sm text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* topic */}
          <div className="flex items-center justify-start mt-5">
            <p className="inline-block p-2 border rounded-md"> JavaScript </p>
          </div>
        </div>

        <div className="p-4 flex items-center justify-between flex-wrap gap-2 w-96">
          {/* buttons */}
          <div className="flex items-center justify-start flex-wrap gap-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-max">
              <EditOutlined /> Edit Task
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md w-max">
              <DeleteOutlined /> Delete Task
            </button>
          </div>

          {/* Team members */}
          <div>
            <h3 className="text-lg font-semibold">Team Members</h3>
            <div className="flex items-center justify-start mt-2">
              <figure className="w-10 h-10 rounded-full">
                <Image
                  className="w-full h-full rounded-full shadow-md"
                  src={team1}
                  alt="project logo"
                />
              </figure>
              <figure className="w-10 h-10 rounded-full -ml-3 shadow-md">
                <Image
                  className="w-full h-full rounded-full"
                  src={team2}
                  alt="project logo"
                />
              </figure>
              <button className="w-10 h-10 rounded-full -ml-3 shadow-md">
                <Image
                  className="w-full h-full rounded-full"
                  src={team3}
                  alt="project logo"
                />
              </button>
              <figure className="w-10 h-10 rounded-full -ml-3 shadow-md">
                <Image
                  className="w-full h-full rounded-full"
                  src={team4}
                  alt="project logo"
                />
              </figure>
              <figure className="w-10 h-10  flex items-center justify-center text-lg rounded-full -ml-3 shadow-md bg-primary text-white">
                <PlusOutlined />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
