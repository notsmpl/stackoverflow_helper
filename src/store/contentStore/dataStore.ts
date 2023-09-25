import { createEffect,createStore } from "effector";
import axios from "axios";

export const API_URL = `http://api.stackexchange.com/2.3`;



export const http = axios.create({baseURL: API_URL}) 

export const getDataFX = createEffect(async () => {
         const res = await http.get(`/questions`, {
            params:{
             site: 'stackoverflow'
         }})
         return res.data.items
    });

export const getSearchFX = createEffect(async (inputValue:string) => {
    const res = await http.get(`/search?order=desc&sort=activity&intitle=${inputValue}`, {
        params:{
            site: 'stackoverflow'
        }})
        return res.data.items
   });

export const $dataStore = createStore([])
    .on(getDataFX.doneData,(_,data) => data)
    .on(getSearchFX.doneData,(_,result) => result);





