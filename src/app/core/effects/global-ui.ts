import { Constants } from './../constants';
import { TranslateService } from '@ngx-translate/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as rootActions from '../actions/global-ui';
import * as fromStore from '../reducers/global-ui';

@Injectable()
export class GlobalEffects {

    constructor(private actions$: Actions,
        private store: Store<fromStore.State>,
        private translate: TranslateService) { }

    @Effect()
    setLanguage$: Observable<Action> = this.actions$
        .ofType(rootActions.SET_LANGUAGE)
        .map((action: rootActions.SetLanguageAction) => action.payload)
        .switchMap((language: string) => Observable.concat(
            Observable.of(new rootActions.SetSpinnerVisibilityAction(true)),
            this.translate.use(language)
                .concatMap(result => {
                    return Observable.from([
                        new rootActions.SetSpinnerVisibilityAction(false)
                    ]);
                })
                .catch(err => Observable.of(new rootActions.SetSpinnerVisibilityAction(false)))
        ));

}
