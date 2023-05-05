import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

describe("The TodoList component should", () => {
  it("render placeholder if no data found", () => {
    render(<TodoList todos={[]} />);
    expect(screen.getByText("No todos found.")).toBeInTheDocument();
  });

  it("render all todos", () => {
    render(
      <TodoList
        todos={[
          {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false,
          },
          {
            userId: 1,
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: false,
          },
        ]}
      />
    );

    expect(screen.getByText("delectus aut autem")).toBeInTheDocument();
    expect(
      screen.getByText("quis ut nam facilis et officia qui")
    ).toBeInTheDocument();
  });
});
