import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {FindProductComponent} from './components/find-product/find-product.component';
import {GetDeviceComponent} from './components/get-robot/get-device.component';
import {AuthGuardService} from './services/auth-guard/auth-guard.service';
import {AuthService} from './services/auth/auth.service';
import {ErrorInterceptor} from './helpers/error-interceptor';
import {JwtInterceptor} from './helpers/jwt-interceptor';
import {TenantService} from './services/tenant/tenant.service';
import {DeviceService} from './services/device/device.service';

@NgModule({
  declarations: [
    AppComponent,
    FindProductComponent,
    GetDeviceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    AuthService, AuthGuardService, TenantService, DeviceService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
