import { Reducer } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import { AnyAction, combineReducers } from "redux";
import { initialRouterState, routerReducer } from "connected-next-router";
import { HYDRATE } from "next-redux-wrapper";
import {
  authReducer,
  initialAuthState
} from "@modules/auth/state/auth.reducer";

import {
  appConfigReducer,
  initialAppConfigState
} from "@modules/state/app-config.reducer";

import { AppState } from "./store.types";
import {
  initialSnackbarState,
  snackbarReducer
} from "@modules/Snackbar/state/snackbar.reducer";
import { initialModalState, modalReducer } from '@shared/components/Modal/state/modal.reducer';

export const reducerInitialState: AppState = {
  form: {},
  router: initialRouterState(),
  appConfig: initialAppConfigState,
  auth: initialAuthState,
  snackbar: initialSnackbarState,
  modal : initialModalState
};

export const reducers = combineReducers<AppState, AnyAction>({
  form: formReducer,
  router: routerReducer,
  appConfig: appConfigReducer,
  auth: authReducer,
  snackbar: snackbarReducer,
  modal: modalReducer
});

export const rootReducers: Reducer<AppState, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    };
    if (typeof window !== "undefined" && state?.router) {
      nextState.router = state.router;
    }
    return nextState;
  } else {
    return reducers(state, action);
  }
};
