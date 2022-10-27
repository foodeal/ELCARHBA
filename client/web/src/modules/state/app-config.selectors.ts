import { createSelector } from '@reduxjs/toolkit';

import { AppState } from '@store/store.types';

const appConfigState = (state: AppState) => state.appConfig;

export const forDesktop = createSelector(appConfigState, (state) => state.forDesktop);
