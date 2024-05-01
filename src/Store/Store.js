// zustand store create & read write update delete
import create from "zustand";
import { devtools } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

// initial tasks data
const initialTasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    priority: "High",
    status: "completed",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    priority: "Medium",
    status: "inProgress",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    priority: "Low",
    status: "notStarted",
  },
  {
    id: 4,
    title: "Task 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    priority: "Hight",
    status: "testing",
  },
  {
    id: 5,
    title: "Task 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    priority: "Medium",
    status: "deployment",
  },
  {
    id: 6,
    title: "Task 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    priority: "Medium",
    status: "testing",
  },

  {
    id: 7,
    title: "Task 7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    priority: "Hight",
    status: "notStarted",
  },
];

export const useZustandStore = create(
  devtools((set) => ({
    tasks: [...initialTasks],

    addTask: (task) => {
      // generate uniq id
      const generateId = uuidv4();

      return set((state) => ({
        tasks: [...state?.tasks, { ...task, id: generateId }],
      }));
    },

    updateTask: (id, task) => {
      set((state) => ({
        tasks: state.tasks.map((t) => (t.id === id ? { ...t, ...task } : t)),
      }));
    },

    singleTask: (id) =>
      set((state) => state.tasks.find((task) => task.id === id)),

    deleteTask: (id) =>
      set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  }))
);
