import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, AppStateData } from './types';

export const initialState: ContainerState = {
  versions: {
    core: '',
    ui: '',
  },
  sites: {
    databases: [],
    infos: [],
    tools: [],
  },
  __meta: {
    fetch: 'unstarted',
  },
  error: undefined,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    fetchData(state) {
      state.__meta.fetch = 'started';
      state.error = undefined;
    },
    setData(state, action: PayloadAction<AppStateData>) {
      Object.keys(action.payload).forEach(key => {
        state[key] = action.payload[key];
      });
      state.__meta.fetch = 'done';
    },
  },
});

export const { actions, reducer, name: sliceKey } = appSlice;
