import { Action, createReducer, isAnyOf } from "@reduxjs/toolkit";
import { UserDetails } from "@core/models";

import * as fromAuthAction from "./auth.actions";

export interface AuthState {
  loading: boolean;
  submitting: boolean;
  user: UserDetails;
}

export const initialAuthState: AuthState = {
  loading: false,
  submitting: false,
  user: {} as UserDetails
};

const _authReducer = createReducer<AuthState>(initialAuthState, builder => {
  builder
    .addCase(
      fromAuthAction.setUser,
      (state, { payload }): AuthState => ({ ...state, user: payload })
    )
    .addCase(
      fromAuthAction.logOut,
      (state): AuthState => ({ ...state, user: {} as UserDetails })
    )
    .addCase(
      fromAuthAction.authenticateSuccess,
      (state, { payload }): AuthState => ({
        ...state,
        user: payload,
        loading: false,
        submitting: false
      })
    )
    .addMatcher(
      isAnyOf(fromAuthAction.getUserSuccess),
      (state): AuthState => ({ ...state, loading: false, submitting: false })
    )
    .addMatcher(
      isAnyOf(fromAuthAction.getUserFailed, fromAuthAction.authenticateFailed),
      (state): AuthState => ({ ...state, loading: false, submitting: false })
    )
    .addMatcher(
      isAnyOf(fromAuthAction.authenticate, fromAuthAction.getUser),
      (state): AuthState => ({ ...state, loading: true, submitting: true })
    );
});

export function authReducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return _authReducer(state, action);
}
