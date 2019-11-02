import { CreateproductComponent } from './product/createproduct/createproduct.component';
import { ProductsComponent } from './product/products/products.component';
import { LoginComponent } from './user/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './user/guards/auth.guard';
import { RoleGuard } from './user/guards/role.guard';


const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'products/form', component: CreateproductComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'products/form/:id', component: CreateproductComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN' } },
  {path: 'login',component: LoginComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
