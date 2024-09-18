import { create } from "zustand";
export const useStore = create((set) => ({
  allTodos: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [],
  addTodo: (todoText) =>
    set((state) => ({
      allTodos: [
        ...state.allTodos,
        { id: Date.now(), text: todoText, completed: false },
      ],
    })),
  removeTodo: (todoID) =>
    set((state) => ({
      allTodos: state.allTodos.filter((todo) => todo.id !== todoID),
    })),
  ToggleEvent: (todoID) =>
    set((state) => ({
      allTodos: state.allTodos.map((todo) =>
        todo.id === todoID ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  clearTodos: () => set({ allTodos: [] }),
}));
