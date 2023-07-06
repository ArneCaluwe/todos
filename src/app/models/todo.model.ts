export type Todo = {
  title: string;
  type: 'todo' | 'inProgress' | 'done';
};

export type TodoGroup = {
  type: string;
  todos: Todo[];
};
