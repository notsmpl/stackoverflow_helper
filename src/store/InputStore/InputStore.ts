import { createEvent,createStore } from "effector";

export const getSearchValue = createEvent<string>();

export const $inputValue = createStore<string>('')
    .on(getSearchValue,(state,payload)=> payload);

