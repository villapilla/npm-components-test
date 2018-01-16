import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

@NgModule({
    declarations: [
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(routes, { useHash: true }),
      CoreModule.forRoot(),
      StoreModule.forRoot(reducers),
      !environment.production ? StoreDevtoolsModule.instrument() : [],
      EffectsModule.forRoot([]),
      SuiModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
