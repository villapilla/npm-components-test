import { Constants } from './../constants';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../redux';
import * as rootActions from '../actions/global-ui';
import { Router } from '@angular/router';

@Component({
    selector: 'dvc-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
    showSpinner = false;
    subscriptions: Subscription[] = [];

    constructor(private store: Store<fromRoot.State>, private router: Router, private translate: TranslateService) {
        this.setInitLanguage();
    }

    ngOnInit(): void {

        this.subscriptions.push(this.store.select(fromRoot.getShowSpinner).subscribe(x => {
            setTimeout(() => {
                this.showSpinner = x;
            }, 1);
        }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(x => x.unsubscribe());
    }

    private setInitLanguage() {
        const langs: string[] = Constants.Language.DefaultLanguages,
            selectedLanguage: string = localStorage.getItem(Constants.LocalStorage.Lang);
        let browserLang: string,
            lang: string;

        if (selectedLanguage) {

            browserLang = selectedLanguage;
        } else {

            browserLang =  this.translate.getBrowserLang() || this.translate.getBrowserCultureLang();
        }
        lang = browserLang.match(langs.join('|')) ? browserLang : Constants.Language.DefaultLanguage;

        this.translate.addLangs(langs);
        this.translate.setDefaultLang(Constants.Language.DefaultLanguage);
        this.translate.use(lang);

        this.store.dispatch(new rootActions.SetLanguageAction(lang));
    }
}
