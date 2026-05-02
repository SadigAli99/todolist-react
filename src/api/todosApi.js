import { request } from "./httpClient";

export const getTodos = () => {
  return request("todos");
};

export const createTodo = (todo) => {
  return request("todos", {
    method: "POST",
    body: JSON.stringify(todo),
  });
};

export const updateTodo = (id, todo) => {
  return request(`todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(todo),
  });
};

export const deleteTodo = (id) => {
  return request(`todos/${id}`, {
    method: "DELETE",
  });
};
