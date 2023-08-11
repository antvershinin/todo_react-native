import {createSelector} from '@reduxjs/toolkit';

import {RootState} from './store';

export const selectAll = (state: RootState) => state.tasks.tasks;
export const selectFilter = (state: RootState) => state.tasks.activeFilter;

export const listByFilter = createSelector(
  [selectAll, selectFilter],
  (tasks, filter) => {
    if (filter === 'Completed') {
      return tasks.filter(el => el.completed);
    }
    if (filter === 'Active') {
      return tasks.filter(el => !el.completed);
    }

    return tasks;
  },
);

export const filterSelect = createSelector([selectFilter], filter => {
  return filter;
});
