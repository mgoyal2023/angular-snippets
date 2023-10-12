import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';

export interface UserState {  //State type
    users: any[];
}

export let initialState: UserState = { //intial State
    users: []
};


export let UserReducer = createReducer(initialState,

    //Get items Actions
    on(UserActions.getUsers, (state) => ({ ...state })), //Get Users intial state

    on(UserActions.getUsersSuccess, (state, users) => { //Get Users success response
        return {
            ...state,
            users: [...users.users]
        };
    }),

    on(UserActions.getUsersFailure, (state) => { //Get Users failure response
        return {
            ...state,
            users: []
        };
    }),

    //Add Item Actions
    on(UserActions.addUser, (state) => ({ ...state })), //Add User

    on(UserActions.addUserSuccess, (state, Action) => { //Add User Success
        return {
            ...state,
            users: [...state.users, Action.payload]
        };
    }),
    on(UserActions.addUserFailure, (state) => { //Add User Failure
        return {
            ...state,
            users: [...state.users]
        };
    }),

    //Delete Item Actions
    on(UserActions.deleteUser, (state) => ({ ...state })), //Delete User

    on(UserActions.deleteUserSuccess, (state, id) => { //Delete User Success
        let filterValue = state.users.filter(user => user.id != id.id);
        return {
            ...state,
            users: [...filterValue]
        };
    }),

    on(UserActions.deleteUserFailure, (state) => {  //Delete User Failure
        return {
            ...state,
            users: []
        };
    }),

    //Edit Item Actions
    on(UserActions.editUser, (state) => ({ ...state })), //Edit User

    on(UserActions.editUserSuccess, (state, item) => { //Edit User Success
        const modifiedPayload = state.users.map((user) => user.id === item.payload.id ? item.payload : user)
        return {
            ...state,
            users: [...modifiedPayload]
        };
    }),

    on(UserActions.editUserFailure, (state) => {  //Edit User Failure
        return {
            ...state,
            users: []
        };
    })
);