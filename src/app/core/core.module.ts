import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './containers/app.component';

export const COMPONENTS = [
    AppComponent
];

@NgModule({
    imports: [ BrowserAnimationsModule, BrowserModule],
    declarations: COMPONENTS,
    exports: COMPONENTS,
    providers: []
})
export class CoreModule {
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}
