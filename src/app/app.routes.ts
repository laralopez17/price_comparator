import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

export const routes: Routes = [
    {
        path:'main', component: MainComponent, children: [
            {
                path: ':heading/:category/:productType',
                component: ProductListComponent
            },
            {
                path: ':heading/:category',
                component: ProductListComponent
            },
            {
                path: ':heading',
                component: ProductListComponent
            }
        ]
    },
    { path: '**', redirectTo: 'main' }
];
