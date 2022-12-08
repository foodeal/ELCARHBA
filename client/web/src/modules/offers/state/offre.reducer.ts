import { OffreData } from "@core/models/offre/offre";
// import { Action, createReducer, isAnyOf } from "@reduxjs/toolkit";

// import * as fromAuthAction from "./offre.actions";

// export interface AuthState {
//   loading: boolean;
//   submitting: boolean;
//   offre: OffreData;
// }

// export const initialAuthState: AuthState = {
//   loading: false,
//   submitting: false,
//   offre: {} as OffreData
// };

// const _authReducer = createReducer<AuthState>(initialAuthState, builder => {
//   builder
//     .addCase(
//       fromAuthAction.setUser,
//       (state, { payload }): AuthState => ({ ...state, user: payload })
//     )
//     .addCase(
//       fromAuthAction.logOut,
//       (state): AuthState => ({ ...state, offre: {} as OffreData })
//     )
//     .addCase(
//       fromAuthAction.authenticateSuccess,
//       (state, { payload }): AuthState => ({
//         ...state,
//         offre: payload,
//         loading: false,
//         submitting: false
//       })
//     )
//     .addMatcher(
//       isAnyOf(fromAuthAction.getUserSuccess),
//       (state): AuthState => ({ ...state, loading: false, submitting: false })
//     )
//     .addMatcher(
//       isAnyOf(fromAuthAction.getUserFailed, fromAuthAction.authenticateFailed),
//       (state): AuthState => ({ ...state, loading: false, submitting: false })
//     )
//     .addMatcher(
//       isAnyOf(fromAuthAction.authenticate, fromAuthAction.getUser),
//       (state): AuthState => ({ ...state, loading: true, submitting: true })
//     );
// });

// export function authReducer(
//   state: AuthState | undefined,
//   action: Action
// ): AuthState {
//   return _authReducer(state, action);
// }
