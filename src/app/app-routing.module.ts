import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AuthGuardService} from './services/auth-guard/auth-guard.service';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {HomeComponent} from './components/home/home.component';
import {GetDeviceComponent} from './components/get-device/get-device.component';
import {FindProductComponent} from './components/find-product/find-product.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'find-product',
    component: FindProductComponent,
    data: {title: 'Find Product'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'app-home',
    component: HomeComponent,
    data: {title: 'Home'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'get-device',
    component: GetDeviceComponent,
    data: {title: 'Get Device'},
    canActivate: [AuthGuardService]
  },

  {
    path: '',
    redirectTo: '/app-home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
