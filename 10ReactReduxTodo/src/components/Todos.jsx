import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      {/* todo list with tailwain */}
      <div className="flex flex-col items-center justify-center">
        {todos.map((todo) => (
          <div
            className="flex items-center bg-gray-100 mb-3 shadow"
            key={todo.id}
          >
            <div className="px-4 py-2 w-80">
              <h2 className="text-gray-800 font-semibold text-lg">
                {todo.text}
              </h2>
            </div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="flex items-center justify-center h-12 w-12 bg-red-500 text-white"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
