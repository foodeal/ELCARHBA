import { AnyAction, configureStore, Store } from '@reduxjs/toolkit';
import Router from 'next/router';
import { AppContext } from 'next/app';
import createSagaMiddleware from 'redux-saga';
import { createRouterMiddleware, initialRouterState } from 'connected-next-router';
import { createWrapper, MakeStore } from 'next-redux-wrapper';

import { promiseMiddleware } from '@core/utils';

import { reducerInitialState, rootReducers } from './store.reducer';
import { sagas } from './store.effects';
import { AppState } from './store.types';

const store: MakeStore<Store<AppState, AnyAction>> = (context) => {
  const routerMiddleware = createRouterMiddleware();
  const sagaMiddleware = createSagaMiddleware();
  const { asPath } = (context as AppContext).ctx || Router.router || {};
  let initialStates = { ...reducerInitialState };

  if (asPath) {
    initialStates = {
      ...reducerInitialState,
      router: initialRouterState(asPath),
    };
  }

  const middleWares = [promiseMiddleware, sagaMiddleware, routerMiddleware];

  const appStore = configureStore({
    reducer: rootReducers,
    preloadedState: initialStates,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [],
        },
      }).concat(middleWares),
  });

  sagaMiddleware.run(sagas);

  return appStore;
};

export const wrapper = createWrapper(store);
