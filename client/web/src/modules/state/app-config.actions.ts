import { createAction } from '@reduxjs/toolkit';

export const updateDesignView = createAction<{ forDesktop: boolean }>('[appConfig] update design mobile-desktop');
