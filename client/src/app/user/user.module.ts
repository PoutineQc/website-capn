import { HomeComponent } from './home/home.component';
import { UserRoutingModule } from './user-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { ErrorComponent } from './error/error.component';
import { QuillModule } from 'ngx-quill';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ModularPageComponent } from './modular-page/modular-page.component';
import { PageDataResolverService } from './page-data-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    QuillModule
  ],
  declarations: [
    BaseComponent,
    HomeComponent,
    ErrorComponent,
    NavbarComponent,
    FooterComponent,
    ModularPageComponent,
    PageDataResolverService
  ],
  entryComponents: [ BaseComponent ]
})
export class UserModule { }
