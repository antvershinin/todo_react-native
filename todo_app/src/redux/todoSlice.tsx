import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface ITask {
  id: string;
  text: string;
  completed: boolean;
}

export interface ITaskState {
  tasks: ITask[];
  activeFilter: string;
}

export const initialState: ITaskState = {
  tasks: [],
  activeFilter: '',
};

const todoSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    fillState: (state, action: PayloadAction<ITask[]>) => {
      state.tasks = action.payload;
    },
    markComplete: (state, action: PayloadAction<{id: string}>) => {
      const task = state.tasks.find(el => el.id === action.payload.id);

      if (!task) {
        return;
      }

      task.completed = !task.completed;
    },
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<{id: string}>) => {
      state.tasks = state.tasks.filter(el => el.id !== action.payload.id);
    },

    changeText: (state, action: PayloadAction<{id: string; text: string}>) => {
      const task = state.tasks.find(el => el.id === action.payload.id);

      if (!task) return;

      task.text = action.payload.text;
    },
    completeAll: state => {
      if (state.tasks.length === 0) return;
      const tumbler = state.tasks.some(el => !el.completed);
      state.tasks.forEach(el => (el.completed = tumbler));
    },
    clearAll: state => {
      state.tasks = [];
    },
    setFilter: (state, action: PayloadAction<{filterName: string}>) => {
      state.activeFilter = action.payload.filterName;
    },
  },
});

export const {
  fillState,
  addTask,
  markComplete,
  deleteTask,
  changeText,
  completeAll,
  clearAll,
  setFilter,
} = todoSlice.actions;

export default todoSlice.reducer;
