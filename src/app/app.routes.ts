import { Routes } from '@angular/router';
import { MainPageComponent } from './main/pages/mainPage/main-page.component';
import { ProductListComponent } from './main/pages/product-list/product-list.component';
import { headingsResolver } from './main/resolvers/headings.resolver';
import { productsResolver } from './main/resolvers/products.resolver';
import { branchesResolver } from './main/resolvers/branches.resolver';
import { BranchListComponent } from './main/pages/branch-list/branch-list.component';
import { ComparingTableComponent } from './main/pages/comparing-table/comparing-table.component';
import { comparedProductsResolver } from './main/resolvers/compared-products.resolver';
import { WelcomeComponent } from './main/pages/welcome/welcome.component';


export const routes: Routes = [
    {
        path: ':lang',
        component: MainPageComponent,
        resolve: {categorias: headingsResolver},
        children: [
            { path: 'bienvenida', component: WelcomeComponent },
            {
                path: 'comparador/:localityId/:barcodes',
                component: ComparingTableComponent,
                resolve: { comparedProducts: comparedProductsResolver }
            },
            { 
                path: 'productos',
                component: ProductListComponent,
                resolve: { productos: productsResolver }
            },
            {
                path: 'sucursales/:localityId',
                component: BranchListComponent,
                resolve: {sucursales: branchesResolver}
            },
            {
                path: ':heading/:category/:productType',
                component: ProductListComponent,
                resolve: {productos: productsResolver}
            },
            {
                path: ':heading/:category',
                component: ProductListComponent,
                resolve: {productos: productsResolver}
            },
            {
                path: ':heading',
                component: ProductListComponent,
                resolve: {productos: productsResolver}
            },
            { path: '**', redirectTo: 'bienvenida' }
        ]
    },
    { path: '**', redirectTo: 'es-AR/bienvenida' },
];