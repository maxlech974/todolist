export const FETCH_TASKS = 'FETCH_TASKS';
export const SAVE_TASKS = 'SAVE_TASKS';
export const CREATE_TASK = 'CREATE_TASK';
export const PERSIST_TASK = 'PERSIST_TASK';
export const RESET_TASK = 'RESET_TASK';
export const FINISH_TASK = 'FINISH_TASK';

export const fetchTasks = (id) => ({
  type: FETCH_TASKS,
  id,
});

export const finishTask = (id) => ({
  type: FINISH_TASK,
  id,
})

export const createTask = (value, name) => ({
  type: CREATE_TASK,
  value,
  name
});

export const persistTask = () => ({
  type: PERSIST_TASK,
});

export const saveTasks = (tasks) => ({
  type: SAVE_TASKS,
  tasks
});

export const resetTask = () => ({
  type: RESET_TASK
});
