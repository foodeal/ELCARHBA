import { OffreData } from './../../../core/models/offre/offre';
import { createAction } from '@reduxjs/toolkit';
import { ErrorResponseData, UserDetails, SigninData, SignupData } from '@core/models';

export const addOffre = createAction<OffreData>('[Api] addOffre');
export const updateOffre = createAction<OffreData>('[Api] updateOffre');
export const deleteOffre = createAction<OffreData>('[Api] deleteOffre');
export const getOffre = createAction<OffreData>('[Api] getOffre');
export const getAllOffres = createAction<OffreData>('[Api] getAllOffres');
