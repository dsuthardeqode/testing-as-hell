import { ITodo } from "../@types/todo";

interface TodoListProps {
  todos: ITodo[];
}
export default function TodoList({ todos }: TodoListProps) {
  if (!todos.length) return <span> No todos found.</span>;
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <span id={String(todo.id)}> {todo.title} </span>
          </li>
        );
      })}
    </ul>
  );
}
