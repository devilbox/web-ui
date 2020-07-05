import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, Mail } from './types';

export const initialState: ContainerState = {
  sent: [],
  error: undefined,
  __meta: {
    fetch: 'unstarted',
  },
};

const mailSlice = createSlice({
  name: 'mails',
  initialState,
  reducers: {
    fetchData(state) {
      state.__meta.fetch = 'started';
      state.error = undefined;
    },
    setSentMails(state, action: PayloadAction<Mail[]>) {
      state.sent = action.payload;
      state.__meta.fetch = 'done';
    },
  },
});

export const { actions, reducer, name: sliceKey } = mailSlice;
