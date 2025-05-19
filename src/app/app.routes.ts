import { Routes } from '@angular/router';

import { FoodListComponent } from './food-list/food-list.component';
import { PackedsComponent } from './packeds/packeds.component';
import { p404Component } from './p404/p404.component';
import { AuthGuard } from './auth-guard.service';

export const routes: Routes = [
    { path: '', component: PackedsComponent },
    { path: 'food', canActivate: [AuthGuard], component: FoodListComponent},
    { path: '404', component: p404Component },
    { path: '**', redirectTo: '/404' }
];
