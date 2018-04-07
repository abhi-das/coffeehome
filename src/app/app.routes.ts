import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: CoffeeListComponent
    },
    {
        path: 'coffee',
        component: CoffeeComponent
    },
    {
        path: 'coffee/:id',
        component: CoffeeComponent
    }
];

export const AppRoutes = RouterModule.forRoot(routes);
