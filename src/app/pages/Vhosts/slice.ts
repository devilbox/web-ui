import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, VhostsStateData } from './types';

export const initialState: ContainerState = {
  vhosts: [],
  global_config_path: '',
  tld_suffix: '',
  vhost_dir: '',
  error_templates: {
    missing_dns_record: '',
    missing_vhost_dir: '',
  },
  error: undefined,
  __meta: {
    fetch: 'unstarted',
  },
};

const vhostsSlice = createSlice({
  name: 'vhosts',
  initialState,
  reducers: {
    fetchData(state) {
      state.__meta.fetch = 'started';
      state.error = undefined;
    },
    setData(state, action: PayloadAction<VhostsStateData>) {
      Object.keys(action.payload).forEach(key => {
        state[key] = action.payload[key];
      });
      state.__meta.fetch = 'done';
    },
  },
});

export const { actions, reducer, name: sliceKey } = vhostsSlice;
