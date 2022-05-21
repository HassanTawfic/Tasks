import {Component, OnInit} from '@angular/core';
import {Department} from "../../_models/department";
import {DepartmentService} from "../../department.service";

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
  //providers:[DepartmentService]
})
export class DepartmentListComponent implements OnInit {

  deptList: Department[] = []

  constructor(public deptService: DepartmentService) {
  }

  ngOnInit(): void {
    this.deptList = this.deptService.getAllDepts()
  }

}
