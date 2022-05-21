import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentAddComponent} from './student-add/student-add.component';
import {StudentListComponent} from './student-list/student-list.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    StudentAddComponent,
    StudentListComponent
  ],
  exports: [
    StudentAddComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class StudentModule {
}
