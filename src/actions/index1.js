import {ADD_USER, ADD_CITY} from '../constants/action-types';

export function addUser(payload){
    return { type : ADD_USER, payload };
}

export function addCity(payload){
    return { type: ADD_CITY, payload};
	}