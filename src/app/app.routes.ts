import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PayComponent } from './pay/pay.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pay', component: PayComponent },
    { path: 'settings', component: SettingsComponent}
];
