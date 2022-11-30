import { createAction } from '@reduxjs/toolkit';
import { ErrorResponseData, UserDetails, SigninData, SignupData } from '@core/models';

export const authenticate = createAction<SigninData>('[auth/Api] authenticate');
export const register = createAction<SignupData>('[auth/RegisterApi] register');
export const authenticateSuccess = createAction<UserDetails>('[auth/Api] authenticate success');
export const authenticateFailed = createAction<ErrorResponseData>('[auth/Api] authenticate failed');

export const setUser = createAction<UserDetails>('[auth/Api] set user details');
export const logOut = createAction('[auth/Api] log out');

export const getUser = createAction('[auth/Api] getUser');
export const getUserSuccess = createAction('[auth/Api] get user success');
export const getUserFailed = createAction<ErrorResponseData>('[auth/Api] get user failed');
