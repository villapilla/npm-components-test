import { Constants } from './../constants';
import { Injectable } from '@angular/core';

@Injectable()
export class LanguageService {

    constructor() { }

    getLanguage() {

        let lang = localStorage.getItem(Constants.LocalStorage.Lang);

        if (!lang) {
            lang = navigator.language;
            this.setLanguage(lang);
        }

        return lang;
    }

    setLanguage(lang: string) {
        localStorage.setItem(Constants.LocalStorage.Lang, lang);
        location.reload();
    }

}
