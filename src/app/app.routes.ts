import { HomeComponent } from './core/home';
import { Constants } from './core/constants';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: Constants.Routes.Home, component: HomeComponent
    }
];
