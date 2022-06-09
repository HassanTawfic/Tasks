import {Component, OnInit} from '@angular/core';
import {DepartmentService} from "../../department.service";
import {Department} from "../../_models/department";

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css'],
  //providers: [DepartmentService]
})
export class DepartmentAddComponent implements OnInit {

  nDept: Department = new Department(0, '', '')

  constructor(public deptService: DepartmentService) {
  }

  save() {
    this.deptService.addDepartment(this.nDept)
  }

  ngOnInit(): void {
  }

}
