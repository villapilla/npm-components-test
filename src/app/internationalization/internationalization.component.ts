import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as rootActions from '../core/actions/global-ui';
import * as fromRoot from '../redux';

@Component({
    selector: 'app-internationalization',
    templateUrl: './internationalization.component.html',
    styleUrls: ['./internationalization.component.scss']
})
export class InternationalizationComponent implements OnInit, OnDestroy {

    subscriptions: Subscription[] = [];
    selectedLanguage: string;

    constructor(private store: Store<fromRoot.State>) {
    }

    ngOnInit() {
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
