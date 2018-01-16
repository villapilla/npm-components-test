import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SuiModule } from 'ng2-semantic-ui';

import { AppComponent } from './containers/app.component';
import { CORE_COMPONENTS } from './index';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home';


export const COMPONENTS = [
    AppComponent,
    CORE_COMPONENTS,
    HeaderComponent,
    HomeComponent
];

@NgModule({
    imports: [ BrowserAnimationsModule, BrowserModule, RouterModule, SuiModule],
    declarations: COMPONENTS,
    exports: [ COMPONENTS, SuiModule],
    providers: [
    ]
})
export class CoreModule {
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}
