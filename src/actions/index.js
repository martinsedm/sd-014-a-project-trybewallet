import { INPUT_EMAIL, INPUT_PASSWORD } from "./actionsTypes"

export const registerEmail = (payload) => ({
    type: INPUT_EMAIL, 
    payload,
});

export const registerPassword = (payload) => ({
    type: INPUT_PASSWORD, 
    payload,
});