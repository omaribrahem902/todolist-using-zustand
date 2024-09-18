import { useEffect, useRef } from "react";
import todo_icon from "../icon.png";
import Todoitem from "./Todoitem";
import { useStore } from "./store";

function Todo() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const allTodos = useStore((state) => state.allTodos);
  const addTodo = useStore((state) => state.addTodo);
  const clearTodos = useStore((state) => state.clearTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }, [allTodos]);

  return (
    <>
      <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
        {/*---------- Title--------- */}
        <div className="flex items-center mt-7 gap-2">
          <img className="w-8" src={todo_icon} alt="" />
          <h1 className="text-3xl font-semibold">To-Do List</h1>
        </div>

        {/*------------ Input box ----------*/}
        <div className="flex items-center my-7 bg-gray-200 rounded-full">
          <input
            ref={inputRef}
            className="bg-transparent border-0 outline-none flex-1 h1-14 pl-6 pr-2 placeholder:text-slate-600"
            type="text"
            placeholder="Add your Task"
          />
          <button
            onClick={clearTodos}
            className="border-none rounded-full bg-red-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
          >
            Clear
          </button>
          <button
            onClick={() => addTodo(inputRef.current.value.trim())}
            className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
          >
            ADD +
          </button>
        </div>
        {/*------------ Todo list------------ */}
        <div>
          {allTodos.map((item) => (
            <Todoitem key={item.id} todo={item} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Todo;
