import { Routes } from '@angular/router';
import { MainPageComponent } from './main/pages/mainPage/main-page.component';
import { ProductListComponent } from './main/pages/product-list/product-list.component';
import { headingsResolver } from './main/resolvers/headings.resolver';
import { IndecResourceService } from './api/resources/indec-resource.service';
import { productsResolver } from './main/resolvers/products.resolver';
import { branchesResolver } from './main/resolvers/branches.resolver';
import { BranchListComponent } from './main/pages/branch-list/branch-list.component';
import { ModalComponent } from './main/components/modal/modal.component';
import { ComparingTableComponent } from './main/pages/comparing-table/comparing-table.component';
import { comparedProductsResolver } from './main/resolvers/compared-products.resolver';

export const routes: Routes = [
    {
        path:'main', 
        component: MainPageComponent,
        resolve: {categorias: headingsResolver}, providers: [IndecResourceService],
        children: [
            {
                path: 'comparador',
                component: ComparingTableComponent,
                resolve: { comparedProducts: comparedProductsResolver },
                providers: [IndecResourceService]
            },
            {
                path: 'localidad/:localityId',
                component: BranchListComponent,
                resolve: {sucursales: branchesResolver},
                providers: [IndecResourceService]
            },
            {
                path: ':heading/:category/:productType',
                component: ProductListComponent,
                resolve: {productos: productsResolver}, 
                providers: [IndecResourceService]
            },
            {
                path: ':heading/:category',
                component: ProductListComponent,
                resolve: {productos: productsResolver}, 
                providers: [IndecResourceService]
            },
            {
                path: ':heading',
                component: ProductListComponent,
                resolve: {productos: productsResolver}, 
                providers: [IndecResourceService]
            }
        ]
    },
    { path: '**', redirectTo: 'main' }
];
