import { Routes } from '@angular/router';
import { MainPageComponent } from './main/pages/mainPage/main-page.component';
import { ProductListComponent } from './main/pages/product-list/product-list.component';
import { headingsResolver } from './main/resolvers/headings.resolver';
import { IndecResourceService } from './api/resources/indec-resource.service';

export const routes: Routes = [
    {
        path:'main', 
        component: MainPageComponent,
        resolve: {categorias: headingsResolver}, providers: [IndecResourceService],
        children: [
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
