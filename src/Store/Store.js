// zustand store create & read write update delete
import create from "zustand";
import { devtools } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { initialProjects, initialTasks } from "./demoData";

export const useZustandStore = create(
  devtools((set) => ({
    projects: [...initialProjects],
    tasks: [...initialTasks],
    authentication: { isLogin: false, user: null },

    getSignUp: (isLogin, user) => {
      set(() => ({
        authentication: { isLogin: isLogin, user: user },
      }));
    },

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
