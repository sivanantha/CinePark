import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    HeaderBarComponent
  ]
})
export class HeaderModule { }
