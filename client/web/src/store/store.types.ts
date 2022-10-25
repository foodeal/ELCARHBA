import { FormStateMap } from "redux-form";
import { RouterState } from "connected-next-router/types";
import { AuthState } from "@modules/auth/state/auth.reducer";
import { AppConfigState } from "@modules/state/app-config.reducer";
import { SnackbarState } from "@modules/Snackbar/state/snackbar.reducer";
import { ModalState } from '@shared/components/Modal/state/modal.reducer';

export type AppState = {
  form: FormStateMap;
  router: RouterState;
  appConfig: AppConfigState;
  auth: AuthState;
  modal: ModalState;
  snackbar: SnackbarState;
};
