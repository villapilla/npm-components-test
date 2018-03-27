import { GridTestComponent } from './grid-test/grid-test.component';
import { InternationalizationComponent } from './internationalization/internationalization.component';
import { HomeComponent } from './core/home';
import { Constants } from './core/constants';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: Constants.Routes.Init, redirectTo: '/' + Constants.Routes.Home, pathMatch: 'full',
    },
    {
        path: Constants.Routes.Home, component: HomeComponent
    },
    {
        path: Constants.Routes.Internationalization, component: InternationalizationComponent
    },
    {
        path: Constants.Routes.Grid, component: GridTestComponent
    }
];
