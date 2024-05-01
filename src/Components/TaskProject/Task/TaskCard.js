import { EllipsisOutlined } from "@ant-design/icons";

export default function TaskCard({ task = {}, idx, setActiveCard }) {
  const { title, description } = task;

  return (
    <article
      className="bg-white p-3 rounded-md shadow-md cursor-grab active:opacity-60 transition duration-300 ease-in-out"
      draggable
      onDragStart={() => setActiveCard(idx)}
      onDragEnd={() => setActiveCard(null)}
    >
      {/* item title */}
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold">{title}</h4>

        {/* Task option button */}
        <button className="text-lg text-gray-600 font-bold">
          <EllipsisOutlined />
        </button>
      </div>

      {/* description */}
      <p className="text-xs text-gray-600">
        {description.length > 50
          ? description.slice(0, 50) + "..."
          : description}
      </p>
    </article>
  );
}
