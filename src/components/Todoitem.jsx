import tick from "../checked.png";
import not_tick from "../unchecked.png";
import { useStore } from "./store";
function Todoitems({ todo }) {
  const removeTodo = useStore((state) => state.removeTodo);
  const ToggleEvent = useStore((state) => state.ToggleEvent);
  return (
    <>
      <div className="flex items-center my-3 gap-2">
        <div
          onClick={() => ToggleEvent(todo.id)}
          className="flex flex-1 items-center cursor-pointer"
        >
          <img src={todo.completed ? tick : not_tick} alt="" className="w-7" />
          <p
            className={`text-slate-700 ml-4 text-[17-px] decoration-slate-500 ${
              todo.completed ? "line-through" : ""
            }`}
          >
            {todo.text}
          </p>
        </div>

        <button style={{ fontSize: "10px", fontWeight: "bold" }}>
          <div
            onClick={() => removeTodo(todo.id)}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              border: "3px solid black",
            }}
          >
            X
          </div>
        </button>
      </div>
    </>
  );
}
export default Todoitems;
