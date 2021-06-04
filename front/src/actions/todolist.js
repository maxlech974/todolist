export const FETCH_TODO_LISTS = 'FETCH_TODO_LISTS';
export const SAVE_TODO_LISTS = 'SAVE_TODO_LISTS';
export const CREATE_TODO_LIST = 'CREATE_TODO_LIST';
export const DELETE_TODOLIST = 'DELETE_TODOLIST';
export const RESET_TODOLIST = 'RESET_TODOLIST';

export const fetchTodoLists = () => ({
  type: FETCH_TODO_LISTS,
});

export const saveTodoLists = (todoLists) => ({
  type: SAVE_TODO_LISTS,
  todoLists
});

export const createTodoList = (value, name) => ({
  type: CREATE_TODO_LIST,
  value,
  name,
});

export const deleteTodolist = (id) => ({
  type: DELETE_TODOLIST,
  id
});

export const resetTodoList = () => ({
  type: RESET_TODOLIST,
});