import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '@store/store.types';

const modalState = (state: AppState) => state.modal;

export const getModalVisibility = createSelector(modalState, (state) => state.visible);
export const getModalCurrentId = createSelector(modalState, (state) => state.modalId);
export const getModalLoading = createSelector(modalState, (state) => state.loading);
export const getModalSubmitted = createSelector(modalState, (state) => state.submitted);
export const getModalElementUuidEntity = createSelector(modalState, (state) => state.elementUuidEntity);
export const getSideBarWidth = createSelector(modalState, (state) => state.sideBarWidth);
