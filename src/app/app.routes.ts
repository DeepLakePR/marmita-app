import { Routes } from '@angular/router';

import { FoodListComponent } from './food-list/food-list.component';
import { PackedsComponent } from './packeds/packeds.component';
import { p404Component } from './p404/p404.component';
import { AuthGuard } from './auth-guard.service';
import { PackedsDefaultComponent } from './packeds/packeds-default/packeds-default.component';
import { PackedsDetailsComponent } from './packeds/packeds-details/packeds-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/packeds', pathMatch: 'full' },
    { path: 'packeds', component: PackedsComponent, children: [
        { path: '', component: PackedsDefaultComponent },
        { path: ':id', component: PackedsDetailsComponent }
    ] },
    { path: 'food', canActivate: [AuthGuard], component: FoodListComponent},
    { path: '404', component: p404Component },
    { path: '**', redirectTo: '/404' }
];
