import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { UserManagementComponent } from './user-management/user-management.component';

export const routes: Routes = [
    { path: 'search', component: SearchComponent },
    { path: 'user',      component: UserManagementComponent },
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: '**', redirectTo: '/search'}
];
