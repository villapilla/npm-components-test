import { GlobalEffects } from './core/effects/global-ui';
import { Constants } from './core/constants';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; 
import { RouterModule } from '@angular/router';

import { SuiModule } from 'ng2-semantic-ui';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './redux';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment.prod';

import { CoreModule } from './core/core.module';
import { AppComponent } from './core/containers/app.component';
import { routes } from './app.routes';
import { LanguageService } from './core';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, { useHash: true }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        HttpClientModule,
        CoreModule.forRoot(),
        StoreModule.forRoot(reducers),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([GlobalEffects]),
        SuiModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

