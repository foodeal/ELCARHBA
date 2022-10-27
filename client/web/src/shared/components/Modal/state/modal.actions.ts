import { createAction } from '@reduxjs/toolkit';

import { ModalIdEnum } from '@core/enums';

export const openModal = createAction<{ modalId: ModalIdEnum; elementUuidEntity?: string; sideBarWidth?: number }>('[Shared/Modal] open modal');
export const setModalLoading = createAction<{ loading: boolean }>('[Shared/Modal] set modal loading state');
export const setModalSubmitting = createAction<{ submitted: boolean }>('[Shared/Modal] set modal submitted');
export const closeModal = createAction('[Shared/Modal] close modal');
