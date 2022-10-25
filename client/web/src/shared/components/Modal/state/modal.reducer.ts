import { createReducer, Action } from '@reduxjs/toolkit';
import { ModalIdEnum } from '@core/enums';

import * as fromModalActions from './modal.actions';

export interface ModalState {
  modalId: ModalIdEnum | undefined;
  visible: boolean;
  loading: boolean;
  submitted: boolean;
  elementUuidEntity: string | undefined;
  sideBarWidth: number | undefined;
}

export const initialModalState: ModalState = {
  modalId: undefined,
  visible: false,
  loading: false,
  submitted: false,
  elementUuidEntity: undefined,
  sideBarWidth: undefined,
};

const _modalReducer = createReducer(initialModalState, (builder) => {
  builder
    .addCase(fromModalActions.openModal, (state, { payload: { modalId, elementUuidEntity, sideBarWidth } }) => ({
      ...state,
      modalId,
      elementUuidEntity,
      visible: true,
      sideBarWidth,
    }))
    .addCase(fromModalActions.setModalLoading, (state, { payload: { loading } }) => ({ ...state, loading }))
    .addCase(fromModalActions.setModalSubmitting, (state, { payload: { submitted } }) => ({ ...state, submitted }))
    .addCase(fromModalActions.closeModal, () => initialModalState);
});

export function modalReducer(state: ModalState | undefined, action: Action): ModalState {
  return _modalReducer(state, action);
}
