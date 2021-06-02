export const FETCH_TODO_LISTS = 'FETCH_TODO_LISTS';
export const SAVE_TODO_LISTS = 'SAVE_TODO_LISTS';

export const fetchTodoLists = () => ({
  type: FETCH_TODO_LISTS,
});

export const saveTodoLists = (todoLists) => ({
  type: SAVE_TODO_LISTS,
  todoLists
})

