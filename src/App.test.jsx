import { render, screen } from "@testing-library/react";
import App from "./App";

test("Listo para testear los componentes", () => {
  render(<App />);
  expect(screen.getByText("Aplicacion de Lista de Tareas")).toBeInTheDocument();

  expect(screen.getByText("Tarea 1")).toBeInTheDocument();
  expect(screen.getByText("Tarea 2")).toBeInTheDocument();
});
