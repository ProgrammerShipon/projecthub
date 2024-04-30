import ProjectBrief from "../ProjectBrief/ProjectBrief";
import Column from "./Column";

// Desc: TaskContainer component for the website
export default function TaskContainer() {

  return (
    <>
      {/* task Container */}
      <div className="flex items-start justify-start gap-5">
        <Column />
        <Column />
        <Column />
      </div>
    </>
  );
}
