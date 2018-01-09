import { Constants } from './core/constants';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: Constants.Routes.Home, redirectTo: '/' , pathMatch: 'full'
    }
];
