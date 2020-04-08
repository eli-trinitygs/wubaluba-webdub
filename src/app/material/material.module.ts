import { NgModule } from '@angular/core';
//Material Icons
import {MatIconModule} from '@angular/material/icon';
//
import {MatButtonModule} from '@angular/material/button';


const Material= [
  MatIconModule,
  MatButtonModule
];

@NgModule({
  imports: [ Material ],
  exports: [ Material ]
})

export class MaterialModule { }
