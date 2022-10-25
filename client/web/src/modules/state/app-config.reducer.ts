import { Action, createReducer } from '@reduxjs/toolkit';

import * as fromActions from './app-config.actions';

export interface AppConfigState {
  loading: boolean;
  forDesktop: boolean;
}

export const initialAppConfigState: AppConfigState = {
  loading: false,
  forDesktop: false,
};

const _appConfigReducer = createReducer<AppConfigState>(initialAppConfigState, (builder) => {
  builder.addCase(fromActions.updateDesignView, (state, { payload }): AppConfigState => ({ ...state, forDesktop: payload.forDesktop }));
});

export function appConfigReducer(state: AppConfigState | undefined, action: Action): AppConfigState {
  return _appConfigReducer(state, action);
}
