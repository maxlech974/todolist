export const FETCH_TASKS = 'FETCH_TASKS';
export const SAVE_TASKS = 'SAVE_TASKS';

export const fetchTasks = (id) => ({
  type: FETCH_TASKS,
  id,
});


export const saveTasks = (tasks) => ({
  type: SAVE_TASKS,
  tasks
})
