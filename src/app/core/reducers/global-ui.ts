import * as GlobalUI from '../actions/global-ui';
import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { PagesEnum } from '../enums';
import { Constants } from '../constants';

export interface State {
    showSpinner: boolean;
}

export const initialState: State = {
    showSpinner: false,
};


export function reducer(state = initialState, action: GlobalUI.Actions): State {
    switch (action.type) {

        case GlobalUI.SET_SPINNER:
            return Object.assign({}, state, { showSpinner: action.payload });

        default:
            return state;
    }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getShowSpinner = (state: State) => state.showSpinner;
