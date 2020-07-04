import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, DockerStateData, Container, Tool } from './types';

export const initialState: ContainerState = {
  stacks: [],
  containers: [],
  networking: [],
  mounts: {
    data: [],
    config: [],
    log: [],
  },
  ports: [],
  tools: [],
  settings: [],
  error: undefined,
  __meta: {
    fetch: 'unstarted',
  },
};

const appSlice = createSlice({
  name: 'docker',
  initialState,
  reducers: {
    fetchData(state) {
      state.__meta.fetch = 'started';
      state.error = undefined;
    },
    setData(state, action: PayloadAction<DockerStateData>) {
      Object.keys(action.payload).forEach(key => {
        state[key] = action.payload[key];
      });
      state.__meta.fetch = 'done';
    },
    setContainerData(state, action: PayloadAction<Container>) {
      state.containers[
        state.containers.findIndex(
          container => container.id === action.payload.id,
        )
      ] = action.payload;
    },
    setToolData(state, action: PayloadAction<Tool>) {
      const index = state.tools.findIndex(
        tool => tool.id === action.payload.id,
      );

      state.tools[index] = {
        ...state.tools[index],
        ...action.payload,
      };
    },
  },
});

export const { actions, reducer, name: sliceKey } = appSlice;
