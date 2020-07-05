import { createSelector } from '@reduxjs/toolkit';
import RootState from '../../../types/RootState';
import { Mail } from './types';

export const mails = (state: RootState) => state.mails;

export const makeDataIsFetchedSelector = createSelector(
  mails,
  mailsState => mailsState.__meta.fetch === 'done',
);

export const makeMailsSelector = createSelector(
  mails,
  mailsState => mailsState.sent as Mail[],
);
