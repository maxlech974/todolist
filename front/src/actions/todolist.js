export const FETCH_TODO_LISTS = 'FETCH_TODO_LISTS';
export const SAVE_TODO_LISTS = 'SAVE_TODO_LISTS';
export const CREATE_TODO_LIST = 'CREATE_TODO_LIST';
export const FETCH_TODO_LIST_ID = 'FETCH_TODO_LIST_ID';


export const fetchTodoLists = () => ({
  type: FETCH_TODO_LISTS,
});

export const fetchTodoListId = () => ({
  type: FETCH_TODO_LIST_ID,
});

export const saveTodoLists = (todoLists) => ({
  type: SAVE_TODO_LISTS,
  todoLists
})

export const createTodoList = (value, name) => ({
  type: CREATE_TODO_LIST,
  value,
  name,
})

