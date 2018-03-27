import { getLanguage, getLayoutState } from './../../../redux/index';
import { SetLanguageAction } from './../../actions/global-ui';
import { Constants } from './../../constants';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as rootActions from '../../actions/global-ui';
import * as fromRoot from '../../../redux';

@Component({
    selector: 'dvc-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    subscriptions: Subscription[] = [];
    routes = Object.assign({}, Constants.Routes);
    selectedLanguage: string;

    constructor(private store: Store<fromRoot.State>) {
    }

    ngOnInit(): void {

        this.subscriptions.push(this.store.select(fromRoot.getLanguage).subscribe(x => {
            this.selectedLanguage = x;
        }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(x => x.unsubscribe());
    }

    changeLanguage(lang: string) {
        this.store.dispatch(new rootActions.SetLanguageAction(lang));
    }
}
