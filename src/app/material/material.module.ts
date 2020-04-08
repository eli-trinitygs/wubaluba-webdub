import { NgModule } from '@angular/core';
//Material Icons
import {MatIconModule} from '@angular/material/icon';
//ElementsWeb
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';


const Material= [
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatListModule
];

@NgModule({
  imports: [ Material ],
  exports: [ Material ]
})

export class MaterialModule { }
