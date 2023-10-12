import { createAction, props } from '@ngrx/store';

// Get Items
export const getUsers = createAction('[Users] Get Users');
export const getUsersSuccess = createAction('[Users] Get Users Success', props<{ users: any }>());
export const getUsersFailure = createAction('[Users] Get Users Failure');

// Add Item
export const addUser = createAction('[Users] Add User', props<{ payload: any }>());
export const addUserSuccess = createAction('[Users] Add User Success', props<{ payload: any }>());
export const addUserFailure = createAction('[Users] Add User Failure');

// Delete Item
export const deleteUser = createAction('[Users] Delete User', props<{ id: string }>());
export const deleteUserSuccess = createAction('[Users] Delete User Success', props<{ id: string }>());
export const deleteUserFailure = createAction('[Users] Delete User Failure');

//Edit Item
export const editUser = createAction('[Users] Edit User', props<{ editData: any }>());
export const editUserSuccess = createAction('[Users] Edit User Success', props<{ payload: any }>());
export const editUserFailure = createAction('[Users] Edit User Failure');