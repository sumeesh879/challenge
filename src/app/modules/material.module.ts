import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdIconModule,
  MdCardModule,
  MdSidenavModule
} from '@angular/material';
import {NgModule} from '@angular/core';


@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdIconModule,
    MdSidenavModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdIconModule,
    MdCardModule,
    MdSidenavModule
  ],
})
export class MaterialModule { }
