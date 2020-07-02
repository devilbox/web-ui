import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, AppStateData, ContainerItem } from './types';

export const initialState: ContainerState = {
  versions: {
    core: '',
    ui: '',
  },
  stacks: [],
  containers: [],
  networking: [],
  mounts: {
    data: [],
    config: [],
    log: [],
  },
  ports: [],
  settings: {
    databases: [],
    infos: [],
    tools: [],
  },
  loading: false,
  error: undefined,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    fetchData(state) {
      state.loading = true;
      state.error = undefined;
    },
    setData(state, action: PayloadAction<AppStateData>) {
      Object.keys(action.payload).forEach(key => {
        state[key] = action.payload[key];
      });
      state.loading = false;
    },
    setContainerData(state, action: PayloadAction<ContainerItem>) {
      state.containers[
        state.containers.findIndex(
          container => container.id === action.payload.id,
        )
      ] = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = appSlice;
