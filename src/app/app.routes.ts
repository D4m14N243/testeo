import { Routes } from '@angular/router';
import { MCFuseLayoutComponent } from '@mckit/layout-fuse';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MCFuseLayoutComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductsComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];
