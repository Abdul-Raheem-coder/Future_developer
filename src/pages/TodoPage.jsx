import React from "react";

export default function TodoPage() {
  const [task, settask] = usestate("");
  const [todos, setTodos] = usestate([]);

  const handleTodoEntry = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, { text: task, check: false }]);
    settask("");
  };

  return (
    <div>
      <div>
        <form onSubmit={handleTodoEntry}>
          <input
            type="text"
            placeholder="enter task"
            required
            value={task}
            onChange={(e) => settask(e.target.value)}
          />
        </form>
        <button type="submit">add task</button>
      </div>
      <div></div>
    </div>
  );
}
