import { OffreData } from './../../../core/models/offre/offre';
// import { all, put, PutEffect, takeLatest } from "redux-saga/effects";
// import { localStorageKeys, RouterPaths } from "@core/constant";
// import { authenticate } from "@core/services/auth.service";
// import { ErrorResponseData, SigninData } from "@core/models";
// import * as authAction from "./offre.actions";
// import { PayloadAction } from "@reduxjs/toolkit";
// import * as snackbarAction from "../../Snackbar/state/snackbar.actions";
// import { redirectTo } from "@core/utils";

// function* authenticateEffect({
//   payload
// }: PayloadAction<SigninData>): Generator<
//   Promise<OffreData> | PutEffect,
//   void,
//   OffreData
// > {
//   try {
//     const user = yield authenticate({ body: SigninData.mapToApiValue(payload) });
//     console.log("User" + user);
//     // const user: OffreData = {
//     //   token:
//     //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
//     //   id: "1",
//     //   email: "mail@gmail.com",
//     //   firstName: "ibtissem",
//     //   lastName: "chalbi"
//     // };
//     localStorage.setItem(localStorageKeys.token, user.token);
//     yield put(authAction.authenticateSuccess(user));
//   } catch (error) {
//     yield put(authAction.authenticateFailed(error as ErrorResponseData));
//   }
// }

// function* authenticateSuccessEffect(): Generator {
//   yield redirectTo([RouterPaths.RootPaths.rootPath]);
// }

// function* failEffect(error: ErrorResponseData): Generator {
//   let msg = "error.network";
//   if (error.status) {
//     msg = "error.server";
//   }
//   yield put(snackbarAction.openSnackbar({ message: msg, severity: "error" }));
// }

// export function* watchAuth(): Generator {
//   yield all([
//     takeLatest(authAction.authenticate.type, authenticateEffect),
//     takeLatest(
//       [authAction.authenticateSuccess.type],
//       authenticateSuccessEffect
//     ),
//     takeLatest(
//       [authAction.getUserFailed.type, authAction.authenticateFailed.type],
//       failEffect
//     )
//   ]);
// }
