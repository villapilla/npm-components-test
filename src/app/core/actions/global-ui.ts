import { Action } from '@ngrx/store';

export const SET_SPINNER = '[Global UI] Establecer visibilidad de loading spinner';

export class SetSpinnerVisibilityAction implements Action {
    readonly type = SET_SPINNER;
    constructor(public payload: boolean) { }
}

export type Actions = SetSpinnerVisibilityAction;
