import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FoodListService } from './food-list/food-list.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

export const appConfig: ApplicationConfig = {
  providers: [
    FoodListService,
    AuthGuard,
    AuthService,

    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes)
  ]
};
