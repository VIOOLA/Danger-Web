import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';

import {MatDividerModule} from '@angular/material/divider';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    MatIconModule, 
    MatToolbarModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
