import { Action } from '@ngrx/store';
import { Constants } from '../constants';

export const SET_SPINNER = '[Global UI] Establecer visibilidad de loading spinner';
export const SET_LANGUAGE = '[Global UI] Establecer lenguaje';

export class SetSpinnerVisibilityAction implements Action {
    readonly type = SET_SPINNER;
    constructor(public payload: boolean) { }
}

export class SetLanguageAction implements Action {
    readonly type = SET_LANGUAGE;
    constructor(public payload: string) {
        localStorage.setItem(Constants.LocalStorage.Lang, payload);
     }
}

export type Actions = SetSpinnerVisibilityAction | SetLanguageAction;
